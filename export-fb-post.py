"""Export FB carousel slides (1080×1350) to PNG."""
from pathlib import Path
import asyncio
from playwright.async_api import async_playwright

HERE = Path(__file__).resolve().parent
SLIDES = [
    ("FB貼文-01-封面.html", "FB貼文-01-封面.png"),
    ("FB貼文-02-服務.html", "FB貼文-02-服務.png"),
    ("FB貼文-03-流程.html", "FB貼文-03-流程.png"),
]
WIDTH, HEIGHT = 1080, 1350


async def export_slide(page, html_name: str, png_name: str) -> None:
    html = HERE / html_name
    png = HERE / png_name
    await page.set_viewport_size({"width": WIDTH, "height": HEIGHT})
    await page.goto(html.as_uri(), wait_until="networkidle")
    await page.wait_for_timeout(1200)
    await page.screenshot(path=str(png), type="png", clip={"x": 0, "y": 0, "width": WIDTH, "height": HEIGHT})
    print(f"Saved: {png}")


async def main() -> None:
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(device_scale_factor=2)
        for html_name, png_name in SLIDES:
            await export_slide(page, html_name, png_name)
        await browser.close()


if __name__ == "__main__":
    asyncio.run(main())
