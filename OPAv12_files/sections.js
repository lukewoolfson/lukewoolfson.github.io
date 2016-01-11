$(document).ready(function(){
    var stages = [];

    $("li.order-stage").each(function( index ) {
        stages.push($(this));
    });

    var currentSectionName = "";
	var currentSection;
	var currentSectionLi;

	var sectionIsActive = false;
	var sectionIsOther = false;
	var sectionIsFuture = false;
	var firstStage = null;
	var sectionLink = null;

        $.each(stages, function( index, value ) {
			// Extract the stage name from the html
			var stageName;
			if ($(this).hasClass("active-stage")) {
				stageName = $.trim($(this).text());
			} else if ($(this).hasClass("future-stage")) {
				stageName = $.trim($(this).text());
			} else {
				$(this).children("a").each(function( index ) {
					stageName = $.trim($(this).text());
				});
			}

			var stage = $(this);
			if (stageName.indexOf("$") != -1) {
				// If the stage is contained within a section extract the section / stage names
				var sectionName = $.trim(stageName).split("$")[0];   
				var stageName = $.trim(stageName).split("$")[1];
				if (sectionName != currentSectionName) {
					// This is the start of a new section
					
					// Set the class of the previous section and visibility of its contents according to the contained stages
					if (currentSection != null) {
						if (sectionIsActive) {
							currentSectionLi.className = "order-section active-section";
						} else if (sectionIsOther) {
						    currentSectionLi.className = "order-section other-section";
							$(currentSection).hide();
							while (currentSectionLi.firstChild) {
								var elementToRemove = currentSectionLi.firstChild;
								currentSectionLi.removeChild(currentSectionLi.firstChild);
							}
							var sectionA = document.createElement("a");
							$(sectionA).text(currentSectionName);
// commented out, breaks IE9 - Ian Clough		console.log("sectionA.href <- " + sectionLink);
							sectionA.href = sectionLink;
							sectionLink = null;
							currentSectionLi.appendChild(sectionA);
						} else {
						    currentSectionLi.className = "order-section future-section";
							$(currentSection).hide();
						}
					}
					
					currentSectionName = sectionName;

					sectionIsActive = false;
					sectionIsOther = false;
					sectionIsFuture = false;
					
					var sectionLi = document.createElement("li");
					var sectionDiv = document.createElement("div");
					var sectionUl = document.createElement("ul");
					$(sectionLi).text(sectionName);
					sectionLi.appendChild(sectionDiv);
					sectionDiv.appendChild(sectionUl);
					// Insert before current stage!!
					stage[0].parentNode.insertBefore(sectionLi, stage[0]);
					currentSection = sectionUl;
					sectionLink = null;
					currentSectionLi = sectionLi;
					firstStage = stage[0];
				}
				if (currentSectionName != "") {
					currentSection.appendChild(stage[0]);
					
					if ($(this).hasClass("active-stage")) {
						sectionIsActive = true;
					}
					if ($(this).hasClass("future-stage")) {
						sectionIsFuture = true;
					}
					if ($(this).hasClass("other-stage")) {
						sectionIsOther = true;
					}
				}
			} else {
				// Set the class of the previous section and visibility of its contents according to the contained stages
				if (currentSection != null) {
					if (sectionIsActive) {
						currentSectionLi.className = "order-section active-section";
					} else if (sectionIsOther) {
					    currentSectionLi.className = "order-section other-section";
						$(currentSection).hide();
						while (currentSectionLi.firstChild) {
							currentSectionLi.removeChild(currentSectionLi.firstChild);
						}
						var sectionA = document.createElement("a");
						$(sectionA).text(currentSectionName);
// commented out, breaks IE9 - Ian Clough	console.log("sectionA.href <- " + sectionLink);
						sectionA.href = sectionLink;
						sectionLink = null;
						currentSectionLi.appendChild(sectionA);
					} else {
					    currentSectionLi.className = "order-section future-section";
						$(currentSection).hide();
					}
				}

				currentSectionName = "";
				currentSection = null;
				currentSectionLi = null;
			}

// commented out, breaks IE9 - Ian Clough	console.log("checking stage: " + $(this).attr('class') + " sectionLink: " + sectionLink);
			if ($(this).hasClass("other-stage")) {
				$(this).children("a").each(function( index ) {
					if (sectionLink == null) {
						sectionLink = $(this).attr("href");
// commented out, breaks IE9 - Ian Clough	console.log("sectionLink <- " + sectionLink);
					}
				});
			}
			
			
		});

		// Set the class of the previous section and visibility of its contents according to the contained stages
		if (currentSection != null) {
			if (sectionIsActive) {
				currentSectionLi.className = "order-section active-section";
			} else if (sectionIsOther) {
			    currentSectionLi.className = "order-section other-section";
				$(currentSection).hide();
				// Copy link from first stage in the section
				while (currentSectionLi.firstChild) {
					currentSectionLi.removeChild(currentSectionLi.firstChild);
				}
				var sectionA = document.createElement("a");
				$(sectionA).text(currentSectionName);
// commented out, breaks IE9 - Ian Clough	console.log("sectionA.href <- " + sectionLink);
				sectionA.href = sectionLink;
				sectionLink = null;
				currentSectionLi.appendChild(sectionA);
			} else {
			    currentSectionLi.className = "order-section future-section";
				$(currentSection).hide();
			}
		}


//    var stages = document.getElementsByClassName("order-stage");
    for (i = 0; i < stages.length; i++) {
        var stage = stages[i][0];
        var stageName = stage["innerText" in stage ? "innerText" : "textContent"];
        if (stageName.indexOf("$") != -1) {
            var stageName = $.trim(stageName).split("$")[1];
            if ($(stage).hasClass("other-stage")) {
//                var anchorTag = stage.childNodes[0];			// 0 for IE 8, 1 for IE 9+
//				$(anchorTag).text(stageName);
				var anchorTag = $(stage).children("a").text(stageName);
            } else {
                $(stage).text(stageName);
            }
        }
    }
});