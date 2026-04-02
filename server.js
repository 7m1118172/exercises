const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// السماح بالوصول لكل الملفات الثابتة (الخط، الصور، الخ)
app.use(express.static(__dirname));

// أي طلب آخر، أظهر ملف الـ index.html (مهم لمسار /admin)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// تشغيل السيرفر على جميع العناوين
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
