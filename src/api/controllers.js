const puppeteer = require('puppeteer')
const Log = require("../utils/logger")

exports.getSource = async (req, res, next) => {
  try {
    if (!req.query || !req.query.url) {
      return res
        .status(400)
        .json({ success: false, error: 'URL invalid or not specified' })
    }

    const { url } = req.query
    let sources = null

    console.log(`GETTING SOURCE FROM: ${url}`)
    sources = await getFembedSource(url, next)

    if (!sources) {
      return res
        .status(400)
        .json({ success: false, error: 'No source found' })
    } else if (sources == -1) {
      return res
        .status(400)
        .json({ success: false, error: 'URL must be a string' })
    }

    return res
      .status(200)
      .json({ success: true, data: { url, sources } })
  } catch (err) {
    next(err)
  }
}

const getFembedSource = async (url, next) => {
  try {
    Log.info('Getting source fron FEMBED')
    let sources = [];

    if (!url || typeof url !== 'string') return -1

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    browser.on("targetcreated", async (target) => {
      const page = await target.page();
      if (page) page.close();
    });

    await page.goto(url, { waitUntil: 'networkidle2' });

    await page.setRequestInterception(true);
    page.on('requestfinished', async (request) => {
      const response = request.response();

      const responseHeaders = response.headers();
      let responseBody;
      if (request.redirectChain().length === 0) {
        responseBody = await response.json()
      }

      const information = {
        url: request.url(),
        requestHeaders: request.headers(),
        requestPostData: request.postData(),
        responseHeaders: responseHeaders,
        responseBody,
      };
      
      if (information.responseBody && information.responseBody.data) {
        sources = information.responseBody.data
      }
    });

    while (await page.$('#loading') && !await page.$('.jwplayer')) {
      await page.click('#loading')
    }

    await browser.close()
    return sources
  } catch (err) {
    Log.error(err)
    next(err)
  }
}