// script.js
async function loadSection(section) {
	try {
	  const response = await fetch('data.json');
	  const data = await response.json();
  
	  if (section === 'home') {
		document.getElementById('homeBio').textContent = data.about.bio;
	  
		const experienceContainer = document.getElementById('experienceSection');
		data.about.experience.forEach(item => {
		  const div = document.createElement('div');
		  div.className = 'mb-5';
	  
		  let pointsHTML = '<ul>';
		  item.points.forEach(point => {
			pointsHTML += `<li>${point}</li>`;
		  });
		  pointsHTML += '</ul>';
	  
		  div.innerHTML = `
			<h4 class="text-info fw-bold">${item.role}</h4>
			<h5 class="company-name mb-1">${item.company}</h5>
			<small class="text-secondary d-block mb-2">${item.duration}</small>
			${pointsHTML}
		  `;
	  
		  experienceContainer.appendChild(div);
		});
	  }
	  
	  
	  else if (section === 'about') {
		document.getElementById('aboutText').textContent = data.about.bio;
	  }
	  
	  else if (section === 'projects') {
		const container = document.getElementById('projectsContainer');
		data.projects.forEach(project => {
		  const card = document.createElement('div');
		  card.className = 'col-md-6 mb-4';
		  card.innerHTML = `
			<div class="card text-light h-100">
			  <div class="card-body">
				<h5 class="card-title">${project.title}</h5>
				<p class="card-text">${project.description}</p>
				<a href="${project.link}" target="_blank" class="btn btn-outline-info">View Project</a>
			  </div>
			</div>
		  `;
		  container.appendChild(card);
		});
	  }
  
	  else if (section === 'skills') {
		const container = document.getElementById('skillsContainer');
		const skills = data.skills;
  
		for (const category in skills) {
		  const section = document.createElement('div');
		  section.className = 'mb-4';
  
		  const title = document.createElement('h5');
		  title.textContent = category;
		  title.className = 'text-info';
		  section.appendChild(title);
  
		  skills[category].forEach(skill => {
			const tag = document.createElement('span');
			tag.className = 'skill-tag';
			tag.textContent = skill;
			section.appendChild(tag);
		  });
  
		  container.appendChild(section);
		}
	  }
  
	} catch (error) {
	  console.error('Failed to load content:', error);
	}
  }
  
  // Load navbar and footer
  document.addEventListener("DOMContentLoaded", () => {
	// Load Navbar
	fetch("navbar.html")
	  .then(response => response.text())
	  .then(html => {
		document.getElementById("navbar-placeholder").innerHTML = html;
	  });
  
	// Load Footer
	fetch("footer.html")
	  .then(response => response.text())
	  .then(html => {
		document.getElementById("footer-placeholder").innerHTML = html;
	  });
  });
  