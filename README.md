# Book Management App

แอปนี้ช่วยให้คุณสามารถจัดการข้อมูลหนังสือได้อย่างง่ายดาย โดยมีฟีเจอร์หลักดังนี้

## ฟีเจอร์หลัก

- **เพิ่มหนังสือใหม่**  
  - กดปุ่ม "➕ Go to Add New Book" ในหน้า Book List เพื่อไปยังหน้าเพิ่มหนังสือ
  - กรอกชื่อหนังสือและผู้แต่ง แล้วกด "Add Book" เพื่อบันทึกข้อมูล

- **แสดงรายการหนังสือ**  
  - หน้า Book List จะแสดงรายชื่อหนังสือทั้งหมดที่ถูกเพิ่มเข้ามา
  - สามารถค้นหาหนังสือด้วยช่องค้นหา และกดปุ่ม "Clear" เพื่อล้างข้อความค้นหา

- **แก้ไขข้อมูลหนังสือ**  
  - กดที่รายการหนังสือเพื่อเปิดหน้ารายละเอียด
  - สามารถแก้ไขชื่อหรือผู้แต่ง แล้วกด "💾 Update" เพื่อบันทึกการเปลี่ยนแปลง

- **ลบหนังสือ**  
  - ในหน้ารายละเอียดหนังสือ กด "🗑️ Delete" เพื่อลบหนังสือออกจากระบบ

## โครงสร้างไฟล์สำคัญ

- `BookContext.jsx`  
  - ใช้สำหรับจัดการ state ของหนังสือทั้งหมดในแอปด้วย Context API

- `booklist.jsx`  
  - แสดงรายการหนังสือ ค้นหา แก้ไข และลบหนังสือ

- `book_new.jsx`  
  - สำหรับเพิ่มหนังสือใหม่

- `_layout.js`  
  - ครอบ Provider เพื่อให้ทุกหน้าสามารถเข้าถึงข้อมูลหนังสือได้

## วิธีใช้งาน

1. เพิ่มหนังสือใหม่ผ่านหน้า Add New Book
2. ดูรายการหนังสือทั้งหมดในหน้า Book List
3. ค้นหา แก้ไข หรือลบหนังสือได้จากหน้า Book List

> Why do I have a folder named ".expo" in my project?
The ".expo" folder is created when an Expo project is started using "expo start" command.
> What do the files contain?
- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "settings.json": contains the server configuration that is used to serve the application manifest.
> Should I commit the ".expo" folder?
No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
Upon project creation, the ".expo" folder is already added to your ".gitignore" file.
