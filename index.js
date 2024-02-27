import dataCards from "./public/data/dataCards.js";
import "./public/utils/dropdown.js";
import "./public/utils/dropdownFooter.js";

function renderCards() {
  const cardContainer = document.querySelector(".card-wrapper");

  dataCards.forEach(
    ({
      id,
      image,
      desc,
      level,
      price,
      study,
      skill,
      name,
      location,
      onLine,
      looking,
      certification,
      language,
    }) => {
      cardContainer.innerHTML += `
			<div class="card border border-borderCard rounded-15 shadow-cardShadow flex flex-col"  data-user-id="${id}">
				<div class="flex leading-none" >
					<img class="block max-w-[87px] md:max-w-[211px] w-full object-cover rounded-10" src="${image}" alt="${desc}">
					<div class="flex flex-col gap-2 px-[10px] md:px-4 pt-2.5 md:pb-2  w-full ">
						<div class="flex flex-col gap-1.5 ">
							<div class="flex items-center gap-1.5">
								<h4 class="title text-sm md:text-lg font-bold leading-none">${name}</h4>
								<div class="check-icon  p-1 bg-accentYellow rounded-4">
									<img class="w-[8px] md:w-[10px]" src="./public/assets/icons/check.svg"/>
								</div>
							</div>
							<div class="flex gap-[6px] flex-col sm:flex-row items-start sm:items-center  justify-start sm:justify-between">
								<div class="text-[10px] md:text-sm">${desc}</div>
								<div class="on-line-now">
									<span class="${onLine ? "active" : ""}"> </span>
									<p>Online Now</p>
								</div>
							</div>
						</div>
						<div class="flex flex-col gap-2 leading-none">
							<div class="flex gap-2 items-center pb-1.5">
								<img src="./public/assets/icons/cil-badge.svg" alt="icon" class="h-[10px] md:h-[12px]">
								<span class="font-medium text-[10px] md:text-sm">${level}</span>
							</div>
							<div class="mobile-desc hidden xl:hidden flex flex-col gap-[6px] ">
						<div class="flex gap-[16px]">
							<div class="flex gap-2 items-center">
								<img src="./public/assets/icons/money.svg" alt="icon" class="price-icon">
								<span class="text-[10px] md:text-xs ">${price}</span>
							</div>
							<div class="flex gap-2 items-center">
								<img src="./public/assets/icons/looking.svg" alt="icon" class="w-[10px]">
								<span class="text-[10px] md:text-xs ">${looking}</span>
							</div>
						</div>
						<div class="flex gap-2 items-center">
							<img src="./public/assets/icons/language.svg" alt="icon" class="w-[10px]">
							<span class="study-text text-[10px] md:text-xs ">${language}</span>
						</div>
						<div class="flex gap-2 items-center">
							<img src="./public/assets/icons/study.svg" alt="icon" class="w-[10px]">
							<span class="study-text text-[10px] md:text-xs ">${study}</span>
						</div>
						<div class="flex gap-2 items-center">
							<img src="./public/assets/icons/certificate.svg" alt="icon" class="w-[10px]">
							<span class="study-text text-[10px] md:text-xs ">${certification}</span>
						</div>
					</div>
						<div class="mobile-price xl:flex flex-col gap-[6px] ">
							<div class="flex gap-2 items-center mb-[6px] xl:mb-0">
								<img class="w-[10px] md:w-[12px]" src="./public/assets/icons/money.svg" alt="icon" class="price-icon">
								<span class="text-[10px] md:text-xs">${price}</span>
							</div>
							<div class="flex gap-2 items-center">
								<img class="w-[10px] md:w-[12px]"src="./public/assets/icons/study.svg" alt="study icon" class="study-icon">
								<span class="study-text text-[10px] md:text-xs ">${study}</span>
							</div>
							</div>
							
						</div>
						<div class="hidden md:flex flex-col gap-2 pt-3 ">
							<div class="flex gap-0.5 items-center text-xs overflow-hidden">
							${skill.map((item, id) => {
                return `<span class="flex items-center rounded-10  p-1.5 border max-h-[23px] whitespace-nowrap ${
                  id == 0
                    ? "border-primaryTeal text-primaryTeal font-semibold"
                    : "border-borderCard text-fontGreyLight "
                }">${item}</span>`;
              })}
					   	<span class="text-xs font-semibold  text-[#666666]" >+ 3 more</span></div>
							<div class="location-wrap flex gap-1 items-center">
								<img src="./public/assets/icons/map.svg" alt="icon" class="location-icon">
								<span class="location-text text-[10px] text-[#9FA3A3]">${location}</span>
							</div>
						</div>
					</div>
				</div>
				<div class="info-skills-mobile flex md:hidden flex-col gap-2 px-[20px] pt-[15px] pb-[9px]">
							<div class="flex gap-1 items-center text-[8px] overflow-hidden">
							${skill.map((item, id) => {
                return `<span class="flex items-center leading-none rounded-10 h-full py-[3px] px-[5px] border whitespace-nowrap ${
                  id == 0
                    ? "border-primaryTeal text-primaryTeal font-semibold"
                    : "border-borderCard text-fontGreyLight font-medium"
                }">${item}</span>`;
              })}	<span class="text-[8px] font-semibold text-[#666666]">+ 3 more</span></div>
							<div class="location-wrap flex gap-1 items-center">
								<img src="./public/assets/icons/map.svg" alt="icon" class="location-icon">
								<span class="location-text text-[8px] text-[#9FA3A3]">${location}</span>
							</div>
						</div>	
				<div class="info-wrapper-mobile xl:hidden"></div>
			</div>
		 `;
    }
  );
}

function showUserInfo({
  image,
  desc,
  name,
  level,
  price,
  looking,
  preference,
  certification,
  study,
  experience,
  industry,
  aboutMe,
  skill,
  location,
  onLine,
  language,
}) {
  const userDetails = document.querySelector(".info-wrapper");

  userDetails.innerHTML = `
			<div class="">
				<div
					class="flex items-center justify-center w-full h-full min-h-[360px] bg-[url('${image}')] bg-cover bg-top ">
					<img class="" src="./public/assets/icons/video.svg" alt="Video icon">
				</div>
				</div>
				<div class="px-6 py-8 pb-[200px]" >
				<div class="mb-8">
					<div class="flex items-center gap-4 mb-2">
						<h4 class="title text-2xl font-bold ">${name}</h4>
						<div class="check-icon px-[9px] py-[6px] bg-accentYellow rounded-4">
							<img src="./public/assets/icons/check.svg" />
						</div>
					</div>
					<div class="flex items-center justify-between mb-[10px]">
						<span class="text-xl">${desc}</span>
						<div class="on-line-now">
							<span class="${onLine ? "active" : ""}"> </span>
							<p>Online Now</p>
						</div>
					</div>
					<div class="flex gap-2 items-center pb-1.5">
						<img src="./public/assets/icons/cil-badge.svg" alt="" class="level-icon">
						<span class="font-medium">${level}</span>
					</div>
					<div class="flex items-center justify-between gap-2">
						<div class="flex gap-4">
							<img src="./public/assets/icons/resume.svg" alt="Icon resume">
							<span class="text-lg text-primaryTeal font-bold">View Resume</span>
						</div>
						<div class="flex gap-[14px]">
							<button class="px-4 py-[18px] border-2 border-primaryTeal rounded-10"><img
									src="./public/assets/icons/massege.svg" alt="Message"></button>
							<button
								class="px-4 py-[18px] text-lg text-lightColor font-bold rounded-20 bg-primaryTeal">Request
								Interview</button>
						</div>
					</div>
				</div>
				<div class="flex gap-7 mb-8">
					<div class="flex flex-col gap-6 ">
						<div class="flex gap-12  flex-wrap">
							<div class="flex flex-col gap-[15px]">
								<div class="flex gap-2 items-center">
									<img class="w-[16px]" src="./public/assets/icons/money.svg" alt="Icon" >
									<span class="text-sm font-medium text-fontGreyLight">Desired Compensation</span>
								</div>
								<span class="text-lg">${price}</span>
							</div>
							<div class="flex flex-col gap-[15px]">
								<div class="flex gap-2 items-center">
									<img src="./public/assets/icons/looking.svg" alt="" >
									<span class="text-sm font-medium text-fontGreyLight">Looking For</span>
								</div>
								<span class="text-lg">${looking}</span>
							</div>
						</div>
						<div class="flex flex-col gap-[15px]">
							<div class="flex gap-2 items-center">
								<img  class="w-[19px]" src="./public/assets/icons/study.svg" alt="Icon" >
								<span class="text-sm font-medium text-fontGreyLight">School</span>
							</div>
							<span class="text-lg">${study}</span>
						</div>
						<div class="flex flex-col gap-[15px]">
							<div class="flex gap-2 items-center">
								<img src="./public/assets/icons/certificate.svg" alt="Iocon">
								<span class="text-sm font-medium text-fontGreyLight">Certification</span>
							</div>
							<span class="text-lg">${certification}</span>
						</div>
					</div>
					<div class="flex flex-col gap-6">
						<div class="flex flex-col gap-[15px]">
							<div class="flex gap-2 items-center">
								<img src="./public/assets/icons/preferences.svg" alt="Icon" >
								<span class="text-sm font-medium text-fontGreyLight">Preference</span>
							</div>
							<span class="text-lg">${preference}</span>
						</div>
						<div class="flex flex-col gap-[15px]">
							<div class="flex gap-2 items-center">
								<img src="./public/assets/icons/language.svg" alt="" class="price-icon">
								<span class="text-sm font-medium text-fontGreyLight">Speaks</span>
							</div>
							<span class="text-lg">${language}</span>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-10">
					<div class="flex flex-col gap-[15px]">
						<span class="text-sm font-medium text-fontGreyLight">My <b>Retail Sales</b> Experience</span>
						<span class="text-lg">${experience}</span>
						<div class="flex gap-1 items-center text-xs overflow-hidden">
							${skill.map((item, id) => {
                return `<span class="flex items-center rounded-10  p-1.5 border max-h-[23px] whitespace-nowrap ${
                  id == 0
                    ? "border-primaryTeal text-primaryTeal font-semibold"
                    : "border-borderCard text-fontGreyLight"
                }">${item}</span>`;
              })}</div>
					</div>
					<div class="flex flex-col gap-[15px]">
						<span class="text-sm font-medium text-fontGreyLight">Industry Experience</span>
						<span class="text-lg">${industry}</span>
					</div>
					<div class="flex flex-col gap-[15px]">
						<span class="text-sm font-medium text-fontGreyLight">About Me</span>
						<span class="text-lg">${aboutMe}</span>
					</div>
					<div class="flex flex-col gap-[15px]">
						<span class="text-sm font-medium text-fontGreyLight">Location</span>
						<span class="text-lg">${location}</span>
					</div>
					<div class="flex flex-col gap-[15px]">
						<span class="text-sm font-medium text-fontGreyLight">References</span>
						<div class="flex flex-col gap-4">
							<div class="flex flex-col rounded-10 shadow-referencesShadow bg-referencesBg px-[10px] py-[25px] gap-2">
								<div class="flex flex-col gap-6">
									<div><img class="block w-4" src="./public/assets/icons/quotes.svg"
											alt="Quotes icon" /></div>
									<span class="text-lg">
										Chelsey was an amazing employee. Always showed up on time and completed work in
										the most appropriate way which always bring forth great success for the company
										an... <b class="text-primaryTeal">See More</b>
									</span>
									<div class="flex justify-end"><img class="block w-4 rotate-180"
											src="./public/assets/icons/quotes.svg" alt="Quotes icon" /></div>
								</div>
								<div class="text-center flex flex-col ">
									<span class="text-lg">Morris Charles</span>
									<span class="text-xs text-fontGreyLight">Manager, Microsoft.Inc</span>
								</div>
							</div>
							<div class="flex flex-col rounded-10 shadow-referencesShadow bg-referencesBg px-[10px] py-[25px] gap-2">
								<div class="flex flex-col gap-6">
									<div><img class="block w-4" src="./public/assets/icons/quotes.svg"
											alt="Quotes icon" /></div>
									<span class="text-lg">
										Chelsey was an amazing employee. Always showed up on time and completed work in
										the most appropriate way which always bring forth great success for the company
										an... <b class="text-primaryTeal">See More</b>
									</span>
									<div class="flex justify-end"><img class="block w-4 rotate-180"
											src="./public/assets/icons/quotes.svg" alt="Quotes icon" /></div>
								</div>
								<div class="text-center flex flex-col ">
									<span class="text-lg">Morris Charles</span>
									<span class="text-xs text-fontGreyLight">Manager, Microsoft.Inc</span>
								</div>
							</div>
							<div class="flex flex-col rounded-10 shadow-referencesShadow bg-referencesBg px-[10px] py-[25px] gap-2">
								<div class="flex flex-col gap-6">
									<div><img class="block w-4" src="./public/assets/icons/quotes.svg"
											alt="Quotes icon" /></div>
									<span class="text-lg">
										Chelsey was an amazing employee. Always showed up on time and completed work in
										the most appropriate way which always bring forth great success for the company
										an... <b class="text-primaryTeal">See More</b>
									</span>
									<div class="flex justify-end"><img class="block w-4 rotate-180"
											src="./public/assets/icons/quotes.svg" alt="Quotes icon" /></div>
								</div>
								<div class="text-center flex flex-col ">
									<span class="text-lg">Morris Charles</span>
									<span class="text-xs text-fontGreyLight">Manager, Microsoft.Inc</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`;
}

function showUserInfoMobile(
  { image, experience, industry, aboutMe, skill, location },
  userDetailsMobile
) {
  userDetailsMobile.innerHTML = `
  <div class="pt-[16px] px-[16px] pb-[5px]">
  <div class="mb-8 flex flex-col gap-6">
	  <div class="flex items-center justify-between gap-2">
		  <div class="flex gap-[8px] md:gap-4">
			  <img class="w-[13px] md:w-[16px]" src="./public/assets/icons/resume.svg" alt="Icon resume">
			  <span class="text-[14px] md:text-lg text-primaryTeal font-bold">View Resume</span>
		  </div>
		  <div class="flex gap-[14px]">
			  <button class="px-[13px] py-[13px] md:px-4 md:py-[18px] border-2 border-primaryTeal rounded-10">
				  <img class="w-[12px] md:w-[18px]" src="./public/assets/icons/massege.svg"
					  alt="Message"></button>
			  <button
				  class="px-[11px] md:px-4 py-[10px] md:py-[18px] text-[12px] md:text-lg text-lightColor font-bold rounded-10 md:rounded-20 bg-primaryTeal">Request
				  Interview</button>
		  </div>
	  </div>
	  <div
		  class="flex items-center justify-center w-full md:h-full h-[216px] md:min-h-[360px] bg-[url('${image}')] bg-cover bg-top ">
		  <img class="w-[70px] md:w-[156px]" src="./public/assets/icons/video.svg" alt="Video icon">
	  </div>
  </div>
  <div>
	  <div class="flex flex-col gap-6 md:gap-10">
		  <div class="flex flex-col gap-[8px] md:gap-[15px]">
			  <span class="text-[10px] md:text-sm text-fontGreyLight">My <b>Retail Sales</b> Experience</span>
			  <span class="text-[14px] md:text-lg">${experience}</span>
			  <div class="flex gap-1 items-center text-[8px] md:text-[14px] overflow-hidden">
				  ${skill.map((item, id) => {
            return `<span class=" flex items-center leading-none rounded-10 font-semibold py-[3px] px-[5px] md:p-1.5 border whitespace-nowrap ${
              id == 0
                ? " border-primaryTeal text-primaryTeal font-semibold"
                : "border-borderCard text-fontGreyLight font-medium"
            }">${item}</span>`;
          })}</div>
		  </div>
		  <div class="flex flex-col gap-[8px] md:gap-[15px]">
			  <span class="text-[10px] md:text-sm text-fontGreyLight">Industry Experience</span>
			  <span class="text-[14px] md:text-lg">${industry}</span>
		  </div>
		  <div class="flex flex-col gap-[8px] md:gap-[15px]">
			  <span class="text-[10px] md:text-sm text-fontGreyLight">About Me</span>
			  <span class="text-[14px] md:text-lg">${aboutMe}</span>
		  </div>
		  <div class="flex flex-col gap-[8px] md:gap-[15px]">
			  <span class="text-[10px] md:text-sm text-fontGreyLight">Location</span>
			  <span class="text-[14px] md:text-lg">${location}</span>
		  </div>
		  <div class="flex flex-col gap-[8px] md:gap-[15px]">
			  <span class="text-[10px] md:text-sm text-fontGreyLight">References</span>
			  <div class="flex flex-col gap-4">
				  <div
					  class="flex flex-col rounded-10 shadow-referencesShadow bg-referencesBg px-[10px] py-[25px] gap-2">
					  <div class="flex flex-col gap-[16px] md:gap-6">
						  <div><img class="block w-2 md:w-4" src="./public/assets/icons/quotes.svg"
								  alt="Quotes icon" />
						  </div>
						  <span class="text-[12px] md:text-lg">
							  Chelsey was an amazing employee. Always showed up on time and completed work in
							  the most appropriate way which always bring forth great success for the company
							  an... <b class="text-primaryTeal">See More</b>
						  </span>
						  <div class="flex justify-end"><img class="block w-2 md:w-4 rotate-180"
								  src="./public/assets/icons/quotes.svg" alt="Quotes icon" /></div>
					  </div>
					  <div class="text-center flex flex-col ">
						  <span class="text-[12px] md:text-lg">Morris Charles</span>
						  <span class="text-[10px] md:text-xs text-fontGreyLight">Manager, Microsoft.Inc</span>
					  </div>
				  </div>
				  <div
					  class="flex flex-col rounded-10 shadow-referencesShadow bg-referencesBg px-[10px] py-[25px] gap-2">
					  <div class="flex flex-col gap-[16px] md:gap-6">
						  <div><img class="block w-2 md:w-4" src="./public/assets/icons/quotes.svg"
								  alt="Quotes icon" />
						  </div>
						  <span class="text-[12px] md:text-lg">
							  Chelsey was an amazing employee. Always showed up on time and completed work in
							  the most appropriate way which always bring forth great success for the company
							  an... <b class="text-primaryTeal">See More</b>
						  </span>
						  <div class="flex justify-end"><img class="block w-2 md:w-4 rotate-180"
								  src="./public/assets/icons/quotes.svg" alt="Quotes icon" /></div>
					  </div>
					  <div class="text-center flex flex-col ">
						  <span class="text-[12px] md:text-lg">Morris Charles</span>
						  <span class="text-[10px] md:text-xs text-fontGreyLight">Manager, Microsoft.Inc</span>
					  </div>
				  </div>
				  <div
					  class="flex flex-col rounded-10 shadow-referencesShadow bg-referencesBg px-[10px] py-[25px] gap-2">
					  <div class="flex flex-col gap-[16px] md:gap-6">
						  <div><img class="block w-2 md:w-4" src="./public/assets/icons/quotes.svg"
								  alt="Quotes icon" />
						  </div>
						  <span class="text-[12px] md:text-lg">
							  Chelsey was an amazing employee. Always showed up on time and completed work in
							  the most appropriate way which always bring forth great success for the company
							  an... <b class="text-primaryTeal">See More</b>
						  </span>
						  <div class="flex justify-end"><img class="block w-2 md:w-4 rotate-180"
								  src="./public/assets/icons/quotes.svg" alt="Quotes icon" /></div>
					  </div>
					  <div class="text-center flex flex-col ">
						  <span class="text-[12px] md:text-lg">Morris Charles</span>
						  <span class="text-[10px] md:text-xs text-fontGreyLight">Manager, Microsoft.Inc</span>
					  </div>
				  </div>
			  </div>
		  </div>
	  </div>
  </div>
</div>
		 `;
}

document.addEventListener("DOMContentLoaded", function () {
  renderCards();

  const cards = document.querySelectorAll(".card");

  showUserInfo(dataCards[0]);

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const userId = card.getAttribute("data-user-id");
      const user = dataCards.find((user) => user.id == userId);

      showUserInfo(user);

      const infoWrapEl = card.querySelector(".info-wrapper-mobile");
      const infoSkillsMobile = card.querySelector(".info-skills-mobile");
      const mobileDesc = card.querySelector(".mobile-desc");
      const mobilePrice = card.querySelector(".mobile-price");

      showUserInfoMobile(user, infoWrapEl);

      infoSkillsMobile.classList.toggle("hidden-block");
      infoWrapEl.classList.toggle("open");
      mobileDesc.classList.toggle("show-block");
      mobilePrice.classList.toggle("hidden-block");
    });
  });
});
