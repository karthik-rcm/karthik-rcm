"""Stitch the field book into one file: python3 build.py

Reads shell.html, inlines book.css and book.js, and inserts every file in
chapters/ in filename order. Standard library only. Writes fde-field-book.html.
"""
from pathlib import Path

HERE = Path(__file__).parent


def fill(page, marker, text):
    if page.count(marker) != 1:
        raise SystemExit(f"shell.html must contain {marker} exactly once")
    return page.replace(marker, text)


page = (HERE / "shell.html").read_text(encoding="utf-8")
chapters = sorted((HERE / "chapters").glob("*.html"))
page = fill(page, "@@BOOK_CSS@@", (HERE / "book.css").read_text(encoding="utf-8").rstrip())
page = fill(page, "@@CHAPTERS@@", "\n".join(c.read_text(encoding="utf-8").rstrip() for c in chapters))
page = fill(page, "@@BOOK_JS@@", (HERE / "book.js").read_text(encoding="utf-8").rstrip())
(HERE / "fde-field-book.html").write_text(page, encoding="utf-8")
print(f"Built fde-field-book.html from {len(chapters)} chapter files.")
