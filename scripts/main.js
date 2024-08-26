document.addEventListener('DOMContentLoaded', function () {
    // Handle dropdowns
    document.querySelectorAll('.dropdown-toggle').forEach(function (dropdownToggle) {
        dropdownToggle.addEventListener('click', function (e) {
            e.preventDefault();
            let parent = this.parentElement;
            let dropdownMenu = parent.querySelector('.dropdown-menu');
            dropdownMenu.classList.toggle('show');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(function (dropdownMenu) {
                dropdownMenu.classList.remove('show');
            });
        }
    });
});


document.querySelector('.form-inline button').addEventListener('click', function () {
    let searchTerm = document.querySelector('.form-inline input').value;
    if (searchTerm) {
        // اینجا می‌توانید عمل جست‌وجو را پیاده‌سازی کنید
        alert('نتایج برای: ' + searchTerm);
    } else {
        alert('لطفاً چیزی برای جست‌وجو وارد کنید.');
    }
});


document.querySelectorAll('.card').forEach(function (card) {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});


document.querySelector('button.btn-primary').addEventListener('click', function() {
    const quantity = document.getElementById('quantity').value;
    alert(quantity + " محصول به سبد خرید اضافه شد!");
  });

  
  document.addEventListener('DOMContentLoaded', function() {
    const loggedIn = true; // اینجا باید بررسی شود که آیا کاربر وارد شده است یا نه
    if (loggedIn) {
      document.getElementById('logged-in-user').style.display = 'block';
      document.getElementById('not-logged-in').style.display = 'none';
    } else {
      document.getElementById('logged-in-user').style.display = 'none';
      document.getElementById('not-logged-in').style.display = 'block';
    }
  });

  
  document.querySelectorAll('.comment-actions button').forEach(button => {
    button.addEventListener('click', function() {
      if (this.textContent === 'بله') {
        alert('نظر مفید بود!');
      } else {
        alert('نظر مفید نبود!');
      }
    });
  });
  

  document.querySelectorAll('.btn-register').forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      if (confirm("آیا مطمئن هستید که می خواهید در این دوره ثبت نام کنید؟")) {
        // Process the registration here
        alert("ثبت نام شما با موفقیت انجام شد.");
      }
    });
  });

  
  function addCourse(course) {
    const courseGrid = document.querySelector('.course-grid');
    const courseCard = document.createElement('div');
    courseCard.classList.add('course-card');
    courseCard.innerHTML = `
      <img src="${course.image}" alt="Course Image"/>
      <div class="course-details">
        <h2 class="course-name">${course.name}</h2>
        <p class="course-price">قیمت: ${course.price} تومان</p>
        <p class="course-instructor">استاد: ${course.instructor}</p>
        <a href="#" class="btn-register text-decoration-none">ثبت نام در دوره</a>
      </div>
    `;
    courseGrid.appendChild(courseCard);
  }

  
  document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      document.querySelector('.navbar-collapse').classList.remove('show');
    });
  });

  document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', function() {
      const productCard = this.closest('.product-card');
      const productName = productCard.querySelector('.product-name').textContent;
      const productPrice = productCard.querySelector('.product-price').textContent;
      const productImage = productCard.querySelector('img').src;
  
      // ایجاد یک شی برای ذخیره‌ی اطلاعات محصول
      const product = {
        name: productName,
        price: productPrice,
        image: productImage
      };
  
      // دریافت سبد خرید از localStorage یا ایجاد آن در صورت نبود
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
      // اضافه کردن محصول به سبد خرید
      cart.push(product);
  
      // ذخیره‌ی سبد خرید در localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
  
      // پیغام افزودن موفق
      alert('محصول به سبد خرید افزوده شد');
    });
  });
  

  document.querySelectorAll('.btn-view').forEach(button => {
    button.addEventListener('click', function(event) {
      const productCard = this.closest('.product-card');
      const productName = productCard.querySelector('.product-name').textContent;
      const productPrice = productCard.querySelector('.product-price').textContent;
      const productImage = productCard.querySelector('img').src;
  
      // ذخیره‌ی اطلاعات محصول در sessionStorage برای نمایش در صفحه‌ی جزئیات
      sessionStorage.setItem('selectedProduct', JSON.stringify({
        name: productName,
        price: productPrice,
        image: productImage
      }));
    });
  });

  
  document.querySelector('.form-inline button').addEventListener('click', function() {
    const query = document.querySelector('.form-inline input').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');
  
    products.forEach(product => {
      const productName = product.querySelector('.product-name').textContent.toLowerCase();
  
      if (productName.includes(query)) {
        product.style.display = '';
      } else {
        product.style.display = 'none';
      }
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const biography = document.querySelector(".profile-details p");
    const showMoreButton = document.createElement("button");
    showMoreButton.textContent = "نمایش بیشتر";
    showMoreButton.classList.add("btn", "btn-link");
    biography.parentNode.appendChild(showMoreButton);
  
    let isExpanded = false;
  
    showMoreButton.addEventListener("click", function () {
      if (!isExpanded) {
        biography.style.height = "auto";  // نمایش کامل بیوگرافی
        showMoreButton.textContent = "نمایش کمتر";
      } else {
        biography.style.height = "100px";  // محدود کردن به 100 پیکسل
        showMoreButton.textContent = "نمایش بیشتر";
      }
      isExpanded = !isExpanded;
    });
  });

  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  
  document.querySelector('.profile-image').addEventListener('mouseover', function () {
    this.style.transform = 'scale(1.1)';
});
document.querySelector('.profile-image').addEventListener('mouseout', function () {
    this.style.transform = 'scale(1)';
});


const courseLinks = document.querySelectorAll('.course-list a');

courseLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
        this.style.color = '#333';
    });
    link.addEventListener('mouseout', function () {
        this.style.color = '#f5ac03';
    });
});

// Initialize the carousel
$('#blogCarousel').carousel({
    interval: 5000, // سرعت تغییر اسلایدها (5000 میلی ثانیه = 5 ثانیه)
    pause: "hover"  // توقف اسلایدر هنگام هاور کردن
  });

 // کنترل دکمه‌های قبلی و بعدی
$('.carousel-control-prev').click(function() {
    $('#blogCarousel').carousel('prev');
  });
  
  $('.carousel-control-next').click(function() {
    $('#blogCarousel').carousel('next');
  });

  
  // امکان تغییر اسلاید با استفاده از کلید‌های چپ و راست کیبورد
$(document).on('keydown', function(e) {
    if (e.which == 37) {
      $('#blogCarousel').carousel('prev');
    } else if (e.which == 39) {
      $('#blogCarousel').carousel('next');
    }
  });

  
  // Initializing AOS (animate on scroll)
AOS.init({
    duration: 1200, // مدت زمان انیمیشن‌ها
  });

  
  document.addEventListener('DOMContentLoaded', function () {
    const increaseFontBtn = document.createElement('button');
    const decreaseFontBtn = document.createElement('button');
    increaseFontBtn.innerText = "افزایش فونت";
    decreaseFontBtn.innerText = "کاهش فونت";
    increaseFontBtn.style.margin = "10px";
    decreaseFontBtn.style.margin = "10px";

    document.querySelector('.article-header').appendChild(increaseFontBtn);
    document.querySelector('.article-header').appendChild(decreaseFontBtn);

    const articleText = document.querySelector('.article-text');
    let fontSize = 16;

    increaseFontBtn.addEventListener('click', function () {
        fontSize += 2;
        articleText.style.fontSize = fontSize + 'px';
    });

    decreaseFontBtn.addEventListener('click', function () {
        if (fontSize > 12) {
            fontSize -= 2;
            articleText.style.fontSize = fontSize + 'px';
        }
    });
});
 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="https://"]').forEach(link => {
        link.setAttribute('target', '_blank');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelectorAll(".item");
    const totalPriceElement = document.querySelector(".total");
    
    function calculateTotal() {
      let total = 0;
      cartItems.forEach(item => {
        const priceElement = item.querySelector(".item-price");
        const quantityInput = item.querySelector("input[type='number']");
        const price = parseInt(priceElement.textContent.replace(/[^0-9]/g, ""));
        const quantity = parseInt(quantityInput.value);
        total += price * quantity;
      });
      totalPriceElement.textContent = `مجموع: ${total.toLocaleString()} تومان`;
    }
    
    cartItems.forEach(item => {
      const quantityInput = item.querySelector("input[type='number']");
      quantityInput.addEventListener("input", calculateTotal);
    });
    
    calculateTotal(); // Calculate initial total
  });
  
  document.querySelectorAll('.btn-outline-danger').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.item')[index].remove();
      calculateTotal(); // Update total after removal
    });
  });
  

 // Auto-play برای carousel (چرخش خودکار)
$('.carousel').carousel({
    interval: 3000, // هر 3 ثانیه یک بار چرخش
    pause: 'hover'  // توقف هنگام hover بر روی carousel
  });
  
  // فعال‌سازی hover برای نمایش overlay در گالری
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.querySelector('.overlay').style.opacity = '1';
    });
    item.addEventListener('mouseleave', () => {
      item.querySelector('.overlay').style.opacity = '0';
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");

    // Load saved email from localStorage if available
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
        emailField.value = savedEmail;
    }

    form.addEventListener("submit", function (e) {
        // Clear any previous errors
        clearErrors();

        // Validate email
        const email = emailField.value;
        if (!validateEmail(email)) {
            showError(emailField, "ایمیل وارد شده نامعتبر است.");
            e.preventDefault();
            return;
        }

        // Validate password length
        const password = passwordField.value;
        if (password.length < 6) {
            showError(passwordField, "رمز عبور باید حداقل ۶ کاراکتر باشد.");
            e.preventDefault();
            return;
        }

        // Save email to localStorage
        localStorage.setItem("email", email);
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function showError(input, message) {
        const error = document.createElement("div");
        error.className = "error text-danger mt-1";
        error.innerText = message;
        input.classList.add("is-invalid");
        input.parentElement.appendChild(error);
    }

    function clearErrors() {
        document.querySelectorAll(".error").forEach((el) => el.remove());
        emailField.classList.remove("is-invalid");
        passwordField.classList.remove("is-invalid");
    }
});


document.querySelector('.btn-outline-secondary').addEventListener('click', function() {
    var searchTerm = document.querySelector('.form-control').value;
    if (searchTerm) {
        // Implement search logic here
        alert('جستجو برای: ' + searchTerm);
    }
});


document.querySelector('.btn-edit-profile').addEventListener('click', function() {
    // Implement profile editing logic here
    alert('ویرایش پروفایل');
});


document.querySelectorAll('.dropdown-toggle').forEach(function(element) {
    element.addEventListener('click', function() {
        var target = this.nextElementSibling;
        if (target.style.display === 'block') {
            target.style.display = 'none';
        } else {
            target.style.display = 'block';
        }
    });
});


// Example: Open social media links in new tab
document.querySelectorAll('.text-decoration-none').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(this.href, '_blank');
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm-password");

    form.addEventListener("submit", function (e) {
        // Clear previous errors
        clearErrors();

        // Validate name
        const name = nameField.value.trim();
        if (name === "") {
            showError(nameField, "نام کامل نمی‌تواند خالی باشد.");
            e.preventDefault();
            return;
        }

        // Validate email
        const email = emailField.value.trim();
        if (!validateEmail(email)) {
            showError(emailField, "ایمیل وارد شده نامعتبر است.");
            e.preventDefault();
            return;
        }

        // Validate password length
        const password = passwordField.value;
        if (password.length < 6) {
            showError(passwordField, "رمز عبور باید حداقل ۶ کاراکتر باشد.");
            e.preventDefault();
            return;
        }

        // Validate password match
        const confirmPassword = confirmPasswordField.value;
        if (password !== confirmPassword) {
            showError(confirmPasswordField, "رمز عبور و تأیید رمز عبور مطابقت ندارند.");
            e.preventDefault();
            return;
        }

        // Save name and email to localStorage
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function showError(input, message) {
        const error = document.createElement("div");
        error.className = "error text-danger mt-1";
        error.innerText = message;
        input.classList.add("is-invalid");
        input.parentElement.appendChild(error);
    }

    function clearErrors() {
        document.querySelectorAll(".error").forEach((el) => el.remove());
        nameField.classList.remove("is-invalid");
        emailField.classList.remove("is-invalid");
        passwordField.classList.remove("is-invalid");
        confirmPasswordField.classList.remove("is-invalid");
    }
});


// Initialize the carousel
$(document).ready(function(){
    $('.carousel').carousel({
      interval: 5000 // Set the interval for carousel slides
    });
  });

  // Optional: Handle search functionality if needed
  function handleSearch() {
    var query = document.querySelector('input[type="text"]').value;
    console.log('Search query:', query);
    // Add AJAX request or other logic here
  }

  
