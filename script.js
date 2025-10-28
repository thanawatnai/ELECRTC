document.addEventListener("DOMContentLoaded", function() {
    
    // รายการรูปภาพที่คุณต้องการให้แสดง (ใส่ URL รูปภาพของคุณที่นี่)
    const images = [
        "1.png",
        "2.png",
        
        // เพิ่มรูปภาพได้อีกตามต้องการ
    ];

    let currentImageIndex = 0;
    const slideshowImage = document.getElementById("slideshow-image");

    

    // ฟังก์ชันสำหรับแสดงรูปภาพ
    function showImage(index) {
        if (index >= images.length) {
            currentImageIndex = 0; // วนกลับไปรูปแรก
        } else if (index < 0) {
            currentImageIndex = images.length - 1; // วนไปรูปสุดท้าย
        }
        slideshowImage.src = images[currentImageIndex];
    }

    // แสดงรูปภาพแรกเมื่อเปิดหน้าเว็บ
    showImage(currentImageIndex);

    // การทำงานของปุ่ม (ในที่นี้เป็นแค่ตัวอย่างการลิงก์)
    // หากต้องการให้ปุ่มเปลี่ยนรูป ให้เพิ่ม Event Listener ดังนี้:
    /*
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

    prevButton.addEventListener('click', (e) => {
        e.preventDefault(); // ป้องกันการเปลี่ยนหน้า
        currentImageIndex--;
        showImage(currentImageIndex);
    });

    nextButton.addEventListener('click', (e) => {
        e.preventDefault(); // ป้องกันการเปลี่ยนหน้า
        currentImageIndex++;
        showImage(currentImageIndex);
    });
    */

    // ตั้งเวลาเปลี่ยนรูปภาพอัตโนมัติ (ตัวเลือกเสริม)
    setInterval(() => {
        currentImageIndex++;
        showImage(currentImageIndex);
    }, 5000); // เปลี่ยนรูปทุก 5 วินาที
    //-----------------------------------------------------------//


    // --- State Management ---
    const state = {
        isLoggedIn: false,
        user: null, // Example: { name: '...', email: '...' }
    };

    // --- DOM Elements ---
    const pageContainer = document.getElementById('page-container');
    const navMenu = document.getElementById('nav-menu');

    // --- Core Functions ---

    /**
     * Loads page content dynamically into the main container.
     * @param {string} pageName The name of the html file to load (without extension).
     */
    const loadPage = async (pageName) => {
        try {
            const response = await fetch(`${pageName}.html`);
            if (!response.ok) {
                throw new Error(`Could not load page: ${response.statusText}`);
            }
            const content = await response.text();
            pageContainer.innerHTML = content;
            window.scrollTo(0, 0);
        } catch (error) {
            console.error('Failed to load page:', error);
            pageContainer.innerHTML = `<p class="text-center text-red-500">เกิดข้อผิดพลาดในการโหลดหน้าเว็บ</p>`;
        }
    };

    
    //-----------------------------------------------------------//
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. ดึง Element ต่างๆ ของ Card โดยใช้ ID ที่กำหนดใน HTML
    const card = document.getElementById('mainPromotionCard');
    const imgElement = document.getElementById('promoImage');
    const tagElement = document.getElementById('promoTag');
    const titleElement = document.getElementById('promoTitle');
    const descElement = document.getElementById('promoDescription');
    const buttonElement = document.getElementById('promoButton');

    // 2. ข้อมูลโปรโมชั่นชุดใหม่ (ตัวอย่าง)
    const newPromotionData = {
        imageSrc: 'assets/new-event.jpg', // ต้องเป็น Path รูปภาพจริง
        tag: '🚨 เปิดตัวผลิตภัณฑ์ใหม่!',
        title: 'สัมผัสอนาคตของเทคโนโลยี',
        description: 'เข้าร่วม Live Stream เปิดตัว Gadget ล่าสุดของเรา พร้อมรับของรางวัลสุดพิเศษ! วันที่ 15 ธ.ค.',
        buttonText: 'รับชม Live Stream',
        buttonLink: 'https://youtube.com/live-event-link'
    };

    // 3. ฟังก์ชันสำหรับอัปเดต Card
    function updatePromotionCard(data) {
        // ตรวจสอบว่า Element มีอยู่ก่อนที่จะทำการแก้ไข เพื่อป้องกัน Error
        if (imgElement) {
            imgElement.src = data.imageSrc;
            imgElement.alt = data.title; // เปลี่ยน Alt Text เพื่อ SEO
        }

        if (tagElement) {
            tagElement.textContent = data.tag;
            // อาจเปลี่ยนสี Tag ด้วย เช่น:
            // tagElement.style.backgroundColor = '#ff0066'; 
        }
        
        if (titleElement) {
            titleElement.textContent = data.title;
        }

        if (descElement) {
            descElement.textContent = data.description;
        }

        if (buttonElement) {
            buttonElement.textContent = data.buttonText;
            buttonElement.href = data.buttonLink;
        }
        
        // เพิ่ม Class สำหรับการแสดงผล เช่น การทำให้ Card เด้ง
        card.classList.add('updated-animation');
        setTimeout(() => {
            card.classList.remove('updated-animation');
        }, 500);
    }
    
    // 4. ตัวอย่างการเรียกใช้: สมมติว่าต้องการเปลี่ยนข้อมูล Card หลังจาก 5 วินาที
    setTimeout(() => {
        // console.log("Updating promotion card data...");
        updatePromotionCard(newPromotionData);
    }, 5000); 
    
    // 5. ตัวอย่างการจัดการ Event (เมื่อผู้ใช้คลิกปุ่ม)
    if (buttonElement) {
        buttonElement.addEventListener('click', function(event) {
            // event.preventDefault(); // หากต้องการป้องกันการเปลี่ยนหน้า
            // console.log(`ปุ่มถูกคลิก: ไปที่ ${this.href}`);
            // สามารถเพิ่มโค้ด Tracking หรือ Analytics ตรงนี้ได้
        });
    }

});

    
});


