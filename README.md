# unihack23

Surely We Can Edit This Right's unihack 2023 repo

## How to run

1. run

```
pip install -r Requirements.txt
python -m venv logrocket_env
logrocket_env/Scripts/activate
```

2. Inside your virtual environment run

```
python manage.py runserver
```

This will start the django server so you can start hitting the APIs

## How it works

User takes a photo or uploads photo of receipt
Frontend will make API call to backend
Backend makes API call to Azure OCR which will return the contents of the receipt in a text format
Backend will analyse the returned data and add it to the db
The frontend can then make another API to read the purchase info from the db

## Diagrams and pictures

![Alt text](/storyboard.jpg?raw=true "Title")

# ARCHIVE

### Helpful Links

- Pytesseract https://pypi.org/project/pytesseract/ or https://github.com/madmaze/pytesseract
- unihack https://www.unihack.net/
- unihack handbook https://unihack.notion.site/2023-Participants-Handbook-5aced37a11934bbcbe6a5071b4d624f6
- Windows downloader for tesseract https://github.com/UB-Mannheim/tesseract/wiki
- Easy OCR https://pypi.org/project/easyocr/ or https://github.com/JaidedAI/EasyOCR

### How to run

#### With Tesseract

1. install tesseract https://github.com/UB-Mannheim/tesseract/wiki

2. run

```
pip install -r requirements.txt
```

3. Create a file named .env
4. Add the line

```
TESSERACT_PATH=<your path to tesseract>
```

Your path will be the folder in your tesseract installation exe + teseract.exe

5. Run the tesseract.py script or run

```
python tesseract.py
```

#### With easyocr

1. Run

```
pip install -r requirements.txt
```

2. Run the easyocr1.py script or run

```
python easyocr1.py
```

This will read from the jon.jpg receipt
