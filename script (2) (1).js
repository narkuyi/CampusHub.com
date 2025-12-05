// Real Kazakhstani Universities Data
const universitiesData = [
    {
        id: 1,
        name: "Al-Farabi Kazakh National University (KazNU)",
        city: "Almaty",
        type: "Public",
        rating: 4.8,
        fields: ["Engineering", "IT", "Science", "Business", "Law", "Medicine", "Arts", "Education"],
        description: "Founded in 1934, KazNU is the oldest and largest university in Kazakhstan. Named after the great philosopher Al-Farabi, it is a leading research institution with 16 faculties, 4 institutes, and over 20,000 students. The university is ranked among the top 200 universities in QS World University Rankings and is a member of the Association of Universities of Central Asia.",
        price: "800,000 - 1,200,000 KZT/year",
        languages: ["Kazakh", "Russian", "English"],
        students: 20000,
        faculties: 16,
        programs: 180,
        international: 2500,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Yes",
        history: "Established in 1934 as Kazakh State University, it was renamed in honor of Al-Farabi in 1991. The university has produced numerous prominent alumni including scientists, politicians, and business leaders.",
        mission: "To provide world-class education, conduct cutting-edge research, and contribute to the development of Kazakhstan and Central Asia.",
        achievements: [
            "Ranked 165th in QS World University Rankings 2024",
            "Member of the Association of Universities of Central Asia",
            "Over 250 international partnerships",
            "State-of-the-art research laboratories",
            "Strong focus on innovation and entrepreneurship"
        ],
        leadership: "Rector: Zhanseit Tuimebayev, PhD in Physics and Mathematics"
    },
    {
        id: 2,
        name: "Nazarbayev University",
        city: "Astana",
        type: "Public",
        rating: 4.9,
        fields: ["Engineering", "IT", "Business", "Medicine", "Science", "Social Sciences", "Education"],
        description: "Established in 2010, Nazarbayev University is Kazakhstan's flagship research university modeled after top international institutions. It offers English-language programs and follows international academic standards. The university collaborates with leading global universities including University of Cambridge, University of Wisconsin-Madison, and Duke University.",
        price: "Free (State grants available)",
        languages: ["English", "Kazakh"],
        students: 6000,
        faculties: 7,
        programs: 45,
        international: 500,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Yes",
        history: "Founded in 2010 by the first President of Kazakhstan, Nursultan Nazarbayev, as part of the country's modernization strategy. The university was designed to become a world-class research institution.",
        mission: "To become a world-class research university that contributes to the development of Kazakhstan and serves as a model for higher education in Central Asia.",
        achievements: [
            "Ranked 230th in QS World University Rankings 2024",
            "Partnerships with top 20 world universities",
            "State-of-the-art campus with modern facilities",
            "100% English-language instruction",
            "Strong research output and international recognition"
        ],
        leadership: "President: Shigeo Katsu, Former World Bank Vice President"
    },
    {
        id: 3,
        name: "Kazakh National Technical University named after K.I. Satpayev (KazNRTU)",
        city: "Almaty",
        type: "Public",
        rating: 4.6,
        fields: ["Engineering", "IT", "Architecture", "Mining", "Geology", "Energy"],
        description: "Founded in 1934, KazNRTU is Kazakhstan's premier technical university specializing in engineering, mining, and technology. Named after the renowned geologist Kanysh Satpayev, the university has strong industry connections and produces highly skilled engineers for Kazakhstan's industrial sector.",
        price: "600,000 - 900,000 KZT/year",
        languages: ["Kazakh", "Russian", "English"],
        students: 15000,
        faculties: 12,
        programs: 65,
        international: 800,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Yes",
        history: "Established in 1934 as the Kazakh Mining and Metallurgical Institute, it was renamed in honor of Kanysh Satpayev in 1999. The university has been instrumental in developing Kazakhstan's engineering workforce.",
        mission: "To provide high-quality technical education and conduct research that supports Kazakhstan's industrial and technological development.",
        achievements: [
            "Leading technical university in Central Asia",
            "Strong partnerships with major industrial companies",
            "Modern laboratories and research facilities",
            "High employment rate for graduates",
            "Active participation in international engineering competitions"
        ],
        leadership: "Rector: Beibit Shokparov, Doctor of Technical Sciences"
    },
    {
        id: 4,
        name: "KIMEP University",
        city: "Almaty",
        type: "Private",
        rating: 4.7,
        fields: ["Business", "IT", "Law", "Economics", "Public Administration", "Journalism"],
        description: "Established in 1992, KIMEP (Kazakhstan Institute of Management, Economics and Strategic Research) is Central Asia's leading private university specializing in business and economics. It offers American-style education with English as the primary language of instruction. KIMEP is accredited by ACBSP and has partnerships with over 100 international universities.",
        price: "1,800,000 - 2,800,000 KZT/year",
        languages: ["English", "Kazakh", "Russian"],
        students: 3500,
        faculties: 5,
        programs: 30,
        international: 200,
        exchange: "Yes",
        dormitory: "Limited",
        scholarship: "Yes",
        history: "Founded in 1992 as Kazakhstan's first private university, KIMEP was established to provide Western-style business education. It has grown to become a leading institution in Central Asia.",
        mission: "To provide world-class education in business, economics, and related fields, preparing students for leadership roles in Kazakhstan and globally.",
        achievements: [
            "ACBSP accredited business programs",
            "Partnerships with 100+ international universities",
            "Strong alumni network in business and government",
            "Modern campus in the heart of Almaty",
            "High graduate employment rates"
        ],
        leadership: "President: Chan Young Bang, PhD in Economics"
    },
    {
        id: 5,
        name: "Karaganda Medical University",
        city: "Karaganda",
        type: "Public",
        rating: 4.5,
        fields: ["Medicine", "Pharmacy", "Dentistry", "Public Health", "Nursing"],
        description: "Founded in 1950, Karaganda Medical University is one of Kazakhstan's leading medical institutions. The university offers comprehensive medical education with strong clinical training programs. It has partnerships with medical universities in Russia, Europe, and Asia, and produces highly qualified healthcare professionals.",
        price: "900,000 - 1,500,000 KZT/year",
        languages: ["Kazakh", "Russian", "English"],
        students: 8500,
        faculties: 6,
        programs: 25,
        international: 600,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Yes",
        history: "Established in 1950 as Karaganda State Medical Institute, it became a university in 1997. The institution has trained thousands of doctors and healthcare professionals for Kazakhstan and neighboring countries.",
        mission: "To provide excellent medical education and conduct research that improves healthcare in Kazakhstan and Central Asia.",
        achievements: [
            "WHO recognized medical programs",
            "Modern clinical training facilities",
            "Partnerships with leading medical universities",
            "Strong research in public health",
            "High pass rates on medical licensing exams"
        ],
        leadership: "Rector: Raushan Dosmagambetova, Doctor of Medical Sciences"
    },
    {
        id: 6,
        name: "Suleyman Demirel University (SDU)",
        city: "Almaty",
        type: "Private",
        rating: 4.4,
        fields: ["Engineering", "Business", "IT", "Law", "Education", "Arts"],
        description: "Established in 1996, SDU is a private university named after the former Turkish Prime Minister Suleyman Demirel. The university offers modern education with a focus on innovation and entrepreneurship. It has a beautiful campus and strong international connections, particularly with Turkish universities.",
        price: "1,200,000 - 2,000,000 KZT/year",
        languages: ["English", "Kazakh", "Turkish"],
        students: 4500,
        faculties: 7,
        programs: 35,
        international: 300,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Limited",
        history: "Founded in 1996 with support from Turkey, SDU was named in honor of Suleyman Demirel. The university combines Kazakh and Turkish educational traditions.",
        mission: "To provide quality education that prepares students for successful careers while fostering cultural exchange between Kazakhstan and Turkey.",
        achievements: [
            "Modern campus with excellent facilities",
            "Strong Turkish-Kazakh cultural programs",
            "Active student exchange programs",
            "Focus on innovation and entrepreneurship",
            "Growing reputation in Central Asia"
        ],
        leadership: "Rector: Meiram Begentayev, PhD"
    },
    {
        id: 7,
        name: "L.N. Gumilyov Eurasian National University",
        city: "Astana",
        type: "Public",
        rating: 4.6,
        fields: ["Humanities", "Social Sciences", "Natural Sciences", "Engineering", "IT", "Economics"],
        description: "Founded in 1996, ENU is named after the prominent historian Lev Gumilyov. Located in the capital city Astana, it is one of Kazakhstan's leading universities with a focus on Eurasian studies, humanities, and social sciences. The university has strong research programs and international partnerships.",
        price: "700,000 - 1,100,000 KZT/year",
        languages: ["Kazakh", "Russian", "English"],
        students: 18000,
        faculties: 13,
        programs: 120,
        international: 1200,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Yes",
        history: "Established in 1996 in Astana (now Nur-Sultan), ENU was created to become a leading university in the capital. Named after Lev Gumilyov, a prominent historian and ethnologist.",
        mission: "To provide comprehensive education and conduct research that contributes to understanding Eurasian culture, history, and development.",
        achievements: [
            "Leading university in the capital",
            "Strong programs in Eurasian studies",
            "Modern campus facilities",
            "Active international cooperation",
            "High research output"
        ],
        leadership: "Rector: Yerlan Sydykov, Doctor of Historical Sciences"
    },
    {
        id: 8,
        name: "Kazakh National Pedagogical University named after Abai",
        city: "Almaty",
        type: "Public",
        rating: 4.5,
        fields: ["Education", "Pedagogy", "Psychology", "Arts", "Languages", "Social Sciences"],
        description: "Founded in 1928, Abai University is Kazakhstan's premier teacher training institution. Named after the great Kazakh poet and educator Abai Kunanbayev, the university specializes in preparing teachers and educators. It has a rich history and strong tradition in pedagogical education.",
        price: "500,000 - 800,000 KZT/year",
        languages: ["Kazakh", "Russian"],
        students: 12000,
        faculties: 10,
        programs: 80,
        international: 400,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Yes",
        history: "Established in 1928 as the Kazakh Pedagogical Institute, it was renamed in honor of Abai Kunanbayev in 1991. The university has trained generations of teachers for Kazakhstan.",
        mission: "To prepare highly qualified teachers and educators who contribute to the development of education in Kazakhstan.",
        achievements: [
            "Leading teacher training institution",
            "Strong tradition in pedagogical education",
            "Modern teaching methods and technologies",
            "Active research in education",
            "High employment rate for graduates"
        ],
        leadership: "Rector: Darkhan Bilyalov, Doctor of Pedagogical Sciences"
    }
];

// Programs Data for Kazakhstani Universities
const programsData = {
    1: [ // Al-Farabi Kazakh National University
        { name: "Computer Science (Bachelor's)", level: "bachelor", duration: "4 years", language: "English, Kazakh, Russian", description: "Comprehensive program covering software development, algorithms, data structures, artificial intelligence, and computer systems. Prepares students for careers in IT industry." },
        { name: "Mechanical Engineering (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Engineering program focusing on mechanical systems, design, manufacturing, and automation. Strong industry connections." },
        { name: "Business Administration (Master's)", level: "master", duration: "2 years", language: "English, Kazakh", description: "Advanced business management program with focus on international business, strategy, and leadership." },
        { name: "Data Science (Master's)", level: "master", duration: "2 years", language: "English", description: "Advanced program in data analytics, machine learning, and big data processing. Prepares for careers in data science." },
        { name: "Law (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Comprehensive legal education covering Kazakhstani and international law." },
        { name: "Medicine (Bachelor's)", level: "bachelor", duration: "6 years", language: "Kazakh, Russian, English", description: "Medical degree program with clinical training. Prepares students for medical practice." }
    ],
    2: [ // Nazarbayev University
        { name: "Computer Science (Bachelor's)", level: "bachelor", duration: "4 years", language: "English", description: "World-class computer science program following international standards. Strong focus on research and innovation." },
        { name: "Business Administration (Bachelor's)", level: "bachelor", duration: "4 years", language: "English", description: "International business program with focus on entrepreneurship and global business practices." },
        { name: "Medicine (Bachelor's)", level: "bachelor", duration: "6 years", language: "English", description: "Medical degree program with modern curriculum and clinical training. Partnership with leading medical schools." },
        { name: "Engineering (Bachelor's)", level: "bachelor", duration: "4 years", language: "English", description: "Engineering program with specialization in mechanical, electrical, or civil engineering." },
        { name: "Economics (Master's)", level: "master", duration: "2 years", language: "English", description: "Advanced economics program with focus on applied economics and policy analysis." }
    ],
    3: [ // Kazakh National Technical University
        { name: "Civil Engineering (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Civil engineering and construction program. Strong focus on infrastructure development and building design." },
        { name: "Electrical Engineering (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Electrical and electronic engineering program. Prepares for careers in power systems and electronics." },
        { name: "Mining Engineering (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Specialized program in mining engineering, mineral processing, and mine safety." },
        { name: "Information Technology (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian, English", description: "IT program focusing on software development, networks, and information systems." },
        { name: "Geology (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Geological sciences program with focus on mineral exploration and earth sciences." }
    ],
    4: [ // KIMEP University
        { name: "Business Administration (Bachelor's)", level: "bachelor", duration: "4 years", language: "English", description: "ACBSP accredited business program with focus on management, marketing, finance, and entrepreneurship." },
        { name: "Economics (Bachelor's)", level: "bachelor", duration: "4 years", language: "English", description: "Economics program with strong analytical focus. Prepares for careers in finance, consulting, and policy." },
        { name: "Accounting and Finance (Bachelor's)", level: "bachelor", duration: "4 years", language: "English", description: "Professional accounting program preparing for CPA and other certifications." },
        { name: "MBA (Master's)", level: "master", duration: "2 years", language: "English", description: "Master of Business Administration program for working professionals and recent graduates." },
        { name: "Public Administration (Master's)", level: "master", duration: "2 years", language: "English", description: "Program preparing for careers in government and public sector management." }
    ],
    5: [ // Karaganda Medical University
        { name: "General Medicine (Bachelor's)", level: "bachelor", duration: "6 years", language: "Kazakh, Russian, English", description: "Comprehensive medical degree program with extensive clinical training. Prepares for medical practice." },
        { name: "Pharmacy (Bachelor's)", level: "bachelor", duration: "5 years", language: "Kazakh, Russian", description: "Pharmacy program covering pharmaceutical sciences, drug development, and pharmacy practice." },
        { name: "Dentistry (Bachelor's)", level: "bachelor", duration: "5 years", language: "Kazakh, Russian", description: "Dental medicine program with clinical training in all aspects of dentistry." },
        { name: "Public Health (Master's)", level: "master", duration: "2 years", language: "Kazakh, Russian", description: "Public health program focusing on epidemiology, health policy, and community health." },
        { name: "Nursing (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Nursing program preparing for professional nursing practice in various healthcare settings." }
    ],
    6: [ // Suleyman Demirel University
        { name: "Computer Engineering (Bachelor's)", level: "bachelor", duration: "4 years", language: "English, Kazakh", description: "Computer engineering program with focus on hardware and software integration." },
        { name: "Business Administration (Bachelor's)", level: "bachelor", duration: "4 years", language: "English", description: "Business program with Turkish-Kazakh cultural focus and international business emphasis." },
        { name: "International Relations (Bachelor's)", level: "bachelor", duration: "4 years", language: "English", description: "Program focusing on international relations, diplomacy, and global affairs." },
        { name: "Architecture (Bachelor's)", level: "bachelor", duration: "5 years", language: "English, Kazakh", description: "Architecture program with focus on sustainable design and modern construction." }
    ],
    7: [ // Eurasian National University
        { name: "International Relations (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian, English", description: "Program focusing on Eurasian studies, international relations, and diplomacy." },
        { name: "History (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "History program with specialization in Central Asian and Eurasian history." },
        { name: "Journalism (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Journalism program preparing for careers in media and communications." },
        { name: "Economics (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Economics program with focus on economic development and policy." }
    ],
    8: [ // Abai University
        { name: "Pedagogy (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Teacher education program preparing for careers in primary and secondary education." },
        { name: "Psychology (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Psychology program with focus on educational and developmental psychology." },
        { name: "Kazakh Language and Literature (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh", description: "Program focusing on Kazakh language, literature, and culture." },
        { name: "Fine Arts (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Fine arts program covering painting, sculpture, and visual arts." }
    ]
};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Load universities on homepage
    if (document.getElementById('universitiesGrid')) {
        displayUniversities(universitiesData);
        setupFilters();
        setupSearch();
        setupSort();
    }

    // Setup compare page
    if (document.getElementById('compare1')) {
        setupComparePage();
    }

    // Setup registration page
    if (document.getElementById('registrationForm')) {
        setupRegistrationPage();
    }

    // Setup tabs on university detail page
    setupTabs();
});

// Display universities
function displayUniversities(universities) {
    const grid = document.getElementById('universitiesGrid');
    const noResults = document.getElementById('noResults');
    
    if (!grid) return;

    if (universities.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    grid.style.display = 'grid';
    noResults.style.display = 'none';
    grid.innerHTML = '';

    universities.forEach(uni => {
        const card = createUniversityCard(uni);
        grid.appendChild(card);
    });
}

// Create university card
function createUniversityCard(uni) {
    const card = document.createElement('div');
    card.className = 'university-card';
    card.onclick = () => window.location.href = `university-detail.html?id=${uni.id}`;

    const fieldsHTML = uni.fields.map(field => 
        `<span class="field-tag">${field}</span>`
    ).join('');

    const stars = '★'.repeat(Math.floor(uni.rating)) + '☆'.repeat(5 - Math.floor(uni.rating));

    card.innerHTML = `
        <div class="university-logo">${uni.name.charAt(0)}</div>
        <h3 class="university-name">${uni.name}</h3>
        <p class="university-city">📍 ${uni.city}</p>
        <div class="university-fields">${fieldsHTML}</div>
        <p class="university-description">${uni.description}</p>
        <div class="university-rating">
            <span class="rating-stars">${stars}</span>
            <span>${uni.rating}</span>
        </div>
        <p class="university-price">💰 ${uni.price}</p>
        <div class="university-actions">
            <button class="btn btn-primary" onclick="event.stopPropagation(); window.location.href='university-detail.html?id=${uni.id}'">View Details</button>
            <button class="btn btn-secondary" onclick="event.stopPropagation(); addToCompare(${uni.id})">Compare</button>
        </div>
    `;

    return card;
}

// Setup filters
function setupFilters() {
    const filterInputs = ['filterCity', 'filterField', 'filterType', 'filterLanguage', 'filterBudget'];
    const resetBtn = document.getElementById('resetFilters');

    filterInputs.forEach(filterId => {
        const filter = document.getElementById(filterId);
        if (filter) {
            filter.addEventListener('change', applyFilters);
        }
    });

    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            filterInputs.forEach(filterId => {
                const filter = document.getElementById(filterId);
                if (filter) filter.value = '';
            });
            applyFilters();
        });
    }
}

// Apply filters
function applyFilters() {
    const city = document.getElementById('filterCity')?.value || '';
    const field = document.getElementById('filterField')?.value || '';
    const type = document.getElementById('filterType')?.value || '';
    const language = document.getElementById('filterLanguage')?.value || '';
    const budget = document.getElementById('filterBudget')?.value || '';

    let filtered = universitiesData.filter(uni => {
        if (city && uni.city !== city) return false;
        if (type && uni.type !== type) return false;
        if (field && !uni.fields.includes(field)) return false;
        if (language && !uni.languages.includes(language)) return false;
        if (budget) {
            if (budget === 'free' && !uni.price.includes('Free')) return false;
            if (budget === 'low' && uni.price.includes('1,500,000')) return false;
            if (budget === 'medium' && (uni.price.includes('Free') || uni.price.includes('2,500'))) return false;
            if (budget === 'high' && !uni.price.includes('2,000')) return false;
        }
        return true;
    });

    displayUniversities(filtered);
}

// Setup search
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');

    const performSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        if (!query) {
            displayUniversities(universitiesData);
            return;
        }

        const filtered = universitiesData.filter(uni => {
            return uni.name.toLowerCase().includes(query) ||
                   uni.city.toLowerCase().includes(query) ||
                   uni.fields.some(f => f.toLowerCase().includes(query)) ||
                   uni.description.toLowerCase().includes(query);
        });

        displayUniversities(filtered);
    };

    if (searchInput) {
        searchInput.addEventListener('input', performSearch);
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
}

// Setup sort
function setupSort() {
    const sortSelect = document.getElementById('sortBy');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortBy = this.value;
            let sorted = [...universitiesData];

            switch(sortBy) {
                case 'name':
                    sorted.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'rating':
                    sorted.sort((a, b) => b.rating - a.rating);
                    break;
                case 'city':
                    sorted.sort((a, b) => a.city.localeCompare(b.city));
                    break;
                case 'price':
                    sorted.sort((a, b) => {
                        const aPrice = a.price.includes('Free') ? 0 : parseInt(a.price.replace(/[^\d]/g, ''));
                        const bPrice = b.price.includes('Free') ? 0 : parseInt(b.price.replace(/[^\d]/g, ''));
                        return aPrice - bPrice;
                    });
                    break;
            }

            displayUniversities(sorted);
        });
    }
}

// Load university details
function loadUniversityDetails(id) {
    const uni = universitiesData.find(u => u.id === parseInt(id));
    if (!uni) return;

    // Update header
    document.getElementById('universityName').textContent = uni.name;
    document.getElementById('universityCity').textContent = uni.city;
    document.getElementById('universityRating').textContent = '★'.repeat(Math.floor(uni.rating)) + '☆'.repeat(5 - Math.floor(uni.rating)) + ' ' + uni.rating;
    document.getElementById('universityType').textContent = uni.type;

    // Update statistics
    document.getElementById('statStudents').textContent = uni.students.toLocaleString() + '+';
    document.getElementById('statFaculties').textContent = uni.faculties;
    document.getElementById('statPrograms').textContent = uni.programs + '+';
    document.getElementById('statInternational').textContent = uni.international + '+';

    // Update history, mission, achievements, leadership
    if (uni.history) {
        const historyEl = document.getElementById('universityHistory');
        if (historyEl) {
            historyEl.querySelector('p').textContent = uni.history;
        }
    }
    if (uni.mission) {
        const missionEl = document.getElementById('universityMission');
        if (missionEl) {
            missionEl.querySelector('p').textContent = uni.mission;
        }
    }
    if (uni.achievements) {
        const achievementsEl = document.getElementById('universityAchievements');
        if (achievementsEl) {
            achievementsEl.querySelector('ul').innerHTML = uni.achievements.map(ach => `<li>${ach}</li>`).join('');
        }
    }
    if (uni.leadership) {
        const leadershipEl = document.getElementById('universityLeadership');
        if (leadershipEl) {
            leadershipEl.innerHTML = `<p><strong>${uni.leadership}</strong></p>`;
        }
    }

    // Load programs
    if (programsData[id]) {
        displayPrograms(programsData[id]);
    }

    // Update contact info
    document.getElementById('contactAddress').textContent = `${uni.city}, Kazakhstan`;
    document.getElementById('contactPhone').textContent = '+7 (XXX) XXX-XX-XX';
    document.getElementById('contactEmail').textContent = `info@${uni.name.toLowerCase().replace(/\s+/g, '').replace(/[()]/g, '')}.kz`;
}

// Display programs
function displayPrograms(programs) {
    const programsList = document.getElementById('programsList');
    if (!programsList) return;

    programsList.innerHTML = programs.map(program => `
        <div class="program-item" data-level="${program.level}">
            <h3>${program.name}</h3>
            <p><strong>Duration:</strong> ${program.duration}</p>
            <p><strong>Language:</strong> ${program.language}</p>
            <p>${program.description}</p>
        </div>
    `).join('');

    // Setup program filters
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', function() {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            const level = this.dataset.level;
            const items = document.querySelectorAll('.program-item');
            items.forEach(item => {
                if (level === 'all' || item.dataset.level === level) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Setup tabs
function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.dataset.tab;

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });
}

// Add to compare
function addToCompare(id) {
    const compareList = JSON.parse(localStorage.getItem('compareList') || '[]');
    if (compareList.length >= 5) {
        alert('You can compare up to 5 universities. Please remove some from your comparison list.');
        return;
    }
    if (!compareList.includes(id)) {
        compareList.push(id);
        localStorage.setItem('compareList', JSON.stringify(compareList));
        alert('University added to comparison!');
    } else {
        alert('This university is already in your comparison list.');
    }
}

// Setup compare page
function setupComparePage() {
    const compareSelects = ['compare1', 'compare2', 'compare3', 'compare4', 'compare5'];
    
    // Populate select options
    compareSelects.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (select) {
            universitiesData.forEach(uni => {
                const option = document.createElement('option');
                option.value = uni.id;
                option.textContent = uni.name;
                select.appendChild(option);
            });
        }
    });

    // Compare button
    const compareBtn = document.getElementById('compareBtn');
    if (compareBtn) {
        compareBtn.addEventListener('click', function() {
            const selectedIds = compareSelects.map(id => {
                const select = document.getElementById(id);
                return select ? parseInt(select.value) : null;
            }).filter(id => id !== null && id !== 0);

            if (selectedIds.length < 2) {
                alert('Please select at least 2 universities to compare.');
                return;
            }

            displayComparison(selectedIds);
        });
    }
}

// Display comparison
function displayComparison(ids) {
    const table = document.getElementById('comparisonTable');
    if (!table) return;

    table.style.display = 'block';
    const universities = ids.map(id => universitiesData.find(u => u.id === id));

    // Update column headers
    for (let i = 0; i < 5; i++) {
        const colHeader = document.getElementById(`uniCol${i + 1}`);
        if (colHeader && universities[i]) {
            colHeader.textContent = universities[i].name;
        } else if (colHeader) {
            colHeader.textContent = '-';
        }
    }

    // Update comparison data
    universities.forEach((uni, index) => {
        if (!uni) return;
        const col = index + 1;
        document.getElementById(`comp-name-${col}`).textContent = uni.name;
        document.getElementById(`comp-city-${col}`).textContent = uni.city;
        document.getElementById(`comp-type-${col}`).textContent = uni.type;
        document.getElementById(`comp-rating-${col}`).textContent = '★'.repeat(Math.floor(uni.rating)) + ' ' + uni.rating;
        document.getElementById(`comp-price-${col}`).textContent = uni.price;
        document.getElementById(`comp-fields-${col}`).textContent = uni.fields.join(', ');
        document.getElementById(`comp-lang-${col}`).textContent = uni.languages.join(', ');
        document.getElementById(`comp-students-${col}`).textContent = uni.students.toLocaleString();
        document.getElementById(`comp-exchange-${col}`).textContent = uni.exchange;
        document.getElementById(`comp-dorm-${col}`).textContent = uni.dormitory;
        document.getElementById(`comp-scholarship-${col}`).textContent = uni.scholarship;
        document.getElementById(`comp-actions-${col}`).innerHTML = `<a href="university-detail.html?id=${uni.id}" class="btn btn-primary">View</a>`;
    });

    // Clear empty columns
    for (let i = universities.length; i < 5; i++) {
        const col = i + 1;
        ['name', 'city', 'type', 'rating', 'price', 'fields', 'lang', 'students', 'exchange', 'dorm', 'scholarship', 'actions'].forEach(field => {
            const elem = document.getElementById(`comp-${field}-${col}`);
            if (elem) elem.textContent = '-';
        });
    }

    // Scroll to comparison table
    table.scrollIntoView({ behavior: 'smooth' });
}

// Setup registration page
function setupRegistrationPage() {
    const universitySelects = ['interestedUniversities', 'appUniversity'];
    
    universitySelects.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (select) {
            universitiesData.forEach(uni => {
                const option = document.createElement('option');
                option.value = uni.id;
                option.textContent = uni.name;
                select.appendChild(option);
            });
        }
    });
    
    // Update program options when university changes
    const appUniversity = document.getElementById('appUniversity');
    const appProgram = document.getElementById('appProgram');
    
    if (appUniversity && appProgram) {
        appUniversity.addEventListener('change', function() {
            const uniId = parseInt(this.value);
            appProgram.innerHTML = '<option value="">Choose a program...</option>';
            
            if (programsData[uniId]) {
                programsData[uniId].forEach(program => {
                    const option = document.createElement('option');
                    option.value = program.name;
                    option.textContent = program.name;
                    appProgram.appendChild(option);
                });
            }
        });
    }
}


