const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// السماح بالوصول لكل الملفات (الخط، الصور، الخ)
app.use(express.static(__dirname));

// عند طلب أي رابط، أظهر ملف الـ index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// تشغيل السيرفر على جميع العناوين ليتوافق مع Render
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
