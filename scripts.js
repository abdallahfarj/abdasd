
function registerUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    // التحقق من مطابقة كلمتي المرور
    if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = "كلمتا المرور غير متطابقتين";
        return;
    }

    // عرض رسالة تأكيد (في حالة عدم وجود خلفية)
    alert(`تم تسجيل ${username} بنجاح!`);
    document.getElementById('registerForm').reset(); // إعادة تعيين النموذج
    errorMessage.style.display = 'none';
}

function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    alert(`تم تسجيل الدخول بنجاح: ${email}`);
    window.location.href = "profile.html"; // الانتقال إلى صفحة الملف الشخصي بعد تسجيل الدخول
}
