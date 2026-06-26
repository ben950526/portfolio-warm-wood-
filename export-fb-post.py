"""Export FB sales post image to PNG."""
from pathlib import Path
import asyncio
from playwright.async_api import async_playwright

HERE = Path(__file__).resolve().parent
HTML = HERE / "FB貼文-服務介紹.html"
PNG = HERE / "FB貼文-服務介紹.png"


async def main() -> None:
    url = HTML.as_uri()
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(
            viewport={"width": 720, "height": 900},
            device_scale_factor=2,
        )
        await page.goto(url, wait_until="networkidle")
        await page.wait_for_timeout(1500)
        await page.screenshot(path=str(PNG), full_page=True, type="png")
        await browser.close()
    print(f"Saved: {PNG}")


if __name__ == "__main__":
    asyncio.run(main())
