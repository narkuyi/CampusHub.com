# CampusHub - Kazakhstan Universities Catalog Website

A comprehensive website for exploring and comparing universities in Kazakhstan. Built with HTML, CSS, and JavaScript.

## Features

### 🏛️ Homepage / General Catalog
- Comprehensive list of universities with search and filter functionality
- Filter by city, field of study, type, language, and budget
- University cards with key information: name, logo, city, fields, description, ratings, and pricing
- Sorting options by name, rating, city, or price

### 📚 Individual University Pages
- Detailed university information including:
  - History, mission, goals, and achievements
  - Statistics (students, faculties, programs)
  - Leadership information
  - Academic programs with detailed descriptions
  - Admission requirements and deadlines
  - Tuition fees and scholarship information
  - International cooperation and exchange programs
  - Contact information

### 🎥 Virtual 3D Tour
- Interactive virtual campus tours
- 360° panorama viewer (simulated)
- Campus map with hotspots
- Location navigation (main building, library, dormitories, cafeteria, sports facilities)
- Media gallery with student stories and campus photos
- 24/7 availability

### ⚖️ University Comparison
- Compare up to 5 universities side-by-side
- Compare by key characteristics:
  - Cost and pricing
  - Fields of study
  - Languages of instruction
  - Ratings
  - Exchange programs
  - Dormitories
  - Scholarships

### 👤 Registration & Personal Account
- User registration form
- Subscribe to notifications about deadlines, grants, and news
- Submit applications/inquiries for specific universities or programs
- Personal preferences tracking

### 📰 Additional Sections
- **News & Blog**: Latest news about education in Kazakhstan, competitions, scholarships, and tips
- **FAQ**: Frequently asked questions about admission, UNT, documents, and universities
- **Contact**: Contact form and support information

## Design

The website uses a modern design based on the provided JSON color scheme:
- **Primary Color**: #69FFB7 (Green)
- **Secondary Color**: #C0C4FF (Purple)
- **Dark Color**: #1B1C2F (Dark Blue)
- **Text Color**: #6B6278 (Gray)
- **White**: #FFFFFF

## File Structure

```
├── index.html              # Homepage with university catalog
├── university-detail.html   # Individual university detail page
├── virtual-tour.html        # Virtual campus tour page
├── compare.html             # University comparison page
├── register.html            # Registration and application page
├── news.html                # News and blog page
├── faq.html                 # Frequently asked questions
├── contact.html             # Contact page
├── admin.html               # Admin dashboard (for managing applications)
├── styles.css               # Main stylesheet
├── script.js                # Main JavaScript file
└── README.md                # This file
```

## How to Use

1. **Open the website**: Simply open `index.html` in a web browser
2. **Browse universities**: Use the homepage to search and filter universities
3. **View details**: Click on any university card to see detailed information
4. **Virtual tour**: Navigate to the Virtual Tour page to explore campuses
5. **Compare**: Select universities on the Compare page to see side-by-side comparisons
6. **Register**: Create an account and submit applications through the Register page

## Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Notes

- This is a front-end only implementation. For a production website, you would need:
  - Backend server for data storage
  - Database for university information
  - User authentication system
  - Email notifications
  - Real 360° panorama integration (using libraries like Three.js or Pannellum)

## Future Enhancements

- Backend integration for dynamic data
- User authentication and personal accounts
- Real 360° panorama tours
- Advanced search with more filters
- University rankings and reviews
- Application tracking system
- Email notifications
- Multi-language support

## License

This project is created for educational purposes.


