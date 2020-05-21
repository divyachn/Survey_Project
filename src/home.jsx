import React from 'react';
import ReactDOM from 'react-dom';
import * as Survey from 'survey-react';

import TopBar from './topBar.jsx';
import SideBar from './sideBar.jsx';

Survey.StylesManager.applyTheme("modern");
Survey.Serializer.addProperty("panel", "bottom_border");

var myCss = {
  page: {title: "page_title"},
  panel: {title: "panel_title"},
  question: {title: "question_title"},
  text: {root: "input_box"}
}

var json = {
  "completeText": "Finish",
  "pageNextText": "Continue",
  "pagePrevText": "Back",
  pages: [
    {
      "name": "page1",
      "title": "Your personal info",
      "elements": [
        {
          "type": "panel",
          "name": "page_1_panel_1",
          "title": "Let's get the rest of your personal info",
          "showNumber": true,
          "showQuestionNumbers": "off",
          "elements": [
            {
              "type": "text",
              "name": "first_name",
              "title": "First Name",
              "width": "250px"
            }, {
              "type": "text",
              "name": "middle_name",
              "title": "Middle Name",
              "startWithNewLine": false,
              "width": "100px"
            }, {
              "type": "text",
              "name": "last_name",
              "title": "Last Name",
              "startWithNewLine": false,
              "width": "50px"
            }, {
              "type": "text",
              "name": "prefix",
              "title": "Jr, Sr, etc.",
              "startWithNewLine": false,
              "width": "30px"
            }, {
              "type": "text",
              "inputType": "date",
              "name": "dob",
              "title": "Date of Birth",
              "inputWidth": "33.33%",
              "placeHolder": "mm/dd/yyyy",
              "isRequired": true
            }, {
              "type": "text",
              "inputType": "number",
              "name": "ss_number",
              "title": "Social Security Number",
              "width": "33.33%",
              "placeHolder": "xxx-xx-xxxx",
              "maxLength": 9
            }, {
              "type": "text",
              "name": "Occupation",
              "width": "33.33%",
              "description": "Example: student, retired, engineer",
              "descriptionLocation": "underInput"
            }, {
              "type": "radiogroup",
              "name": "us_armed_force",
              "title": "I am a member or former member of the U.S. Armed Forces (active, reserved, National Guard).",
              "choices": [{"value": "1","text": "Yes"}, {"value": "0","text": "No"}]
            }, {
              "type": "html",
              "name": "thank_you_officer",
              "html": "<div>Thank you for your service.</div>",
              "visible": false,
              "visibleIf": "{us_armed_force} =1"
            }
          ],
          "bottom_border": "1px solid cyan"
        }, {
          "type": "panel",
          "name": "page_1_panel_2",
          "title": "Tell us the state(s) you lived in",
          "showNumber": true,
          "showQuestionNumbers": "off",
          "elements": [
            {
              "type": "dropdown",
              "name": "state_2019",
              "title": "State of residence (on December 31, 2019)",
              "choices": ["Albama", "Alaska", "Arizona", "Arkansas", "California", "Illinois", "Ohio"]
            }, {
              "type": "html",
              "name": "note_",
              "html": "<div>Note: If you're in the U.S. Armed Forces, your resident state is usually your home of record, the state where you lived when you joined the military. Your resident state stays the same unless you file a specific form to change it, and it's part of the info on your Leave and Earnings Statement (LES).</div>"
            }, {
              "type": "radiogroup",
              "name": "another_state_2019",
              "title": "I lived in another state in 2019.",
              "choices": [{"value": "1","text": "Yes"}, {"value": "0","text": "No"}]
            }, {
              "type": "panel",
              "name": "page_1_panel_2a",
              "elements": [
                {
                  "type": "dropdown",
                  "name": "state_2019_1",
                  "title": "Previous state of residence (where you lived before moving)",
                  "choices": ["Albama", "Alaska", "Arizona", "Arkansas", "California", "Illinois", "Ohio"],
                  "isRequired": true
                }, {
                  "type": "text",
                  "inputType": "date",
                  "name": "when_became_resident",
                  "title": "Date you became a resident of",
                  "isRequired": true
                }, {
                  "type": "html",
                  "name": "some_other_thing",
                  "html": "<div>I am in an RDP or civil union from another state</div>"
                }
              ],
              "visible": false,
              "visibleIf": "{another_state_2019} =1"
            }
          ],
          "bottom_border": "1px solid cyan"
        }, {
          "type": "panel",
          "name": "page_1_panel_3",
          "title": "A few other things we need to know",
          "showNumber": true,
          "showQuestionNumbers": "off",
          "elements": [
            {
              "type": "radiogroup",
              "name": "is_dependent_tax_return",
              "title": "Someone else can claim me as a dependent on their tax return.",
              "choices": [{"value": "1","text": "Yes"}, {"value": "0","text": "No"}]
            }, {
              "type": "radiogroup",
              "name": "dependent_claim_tax_return",
              "title": "And this person will claim me on their 2019 tax return.",
              "choices": [{"value": "1","text": "Yes"}, {"value": "0","text": "No"}],
              "isRequired": true,
              "visible": false,
              "visibleIf": "{is_dependent_tax_return} =1"
            }, {
              "type": "radiogroup",
              "name": "legally_blind",
              "title": "I was considered legally blind as of December 31, 2019",
              "choices": [{"value": "1","text": "Yes"}, {"value": "0","text": "No"}]
            }, {
              "type": "radiogroup",
              "name": "return_of_some_other",
              "title": "I'm preparing this return for someone who has passed away.",
              "choices": [{"value": "1","text": "Yes"}, {"value": "0","text": "No"}]
            }, {
              "type": "panel",
              "name": "page_1_panel_3a",
              "title": "We're sorry to hear about your loss. You can count on us to help you get their tax return done right.",
              "elements": [
                {
                  "type": "text",
                  "inputType": "date",
                  "name": "date_passed_away",
                  "title": "Date passed away",
                  "isRequired": true
                }, {
                  "type": "checkbox",
                  "name": "passed_away_on_duty",
                  "choices": ["This person passed away while on active duty."]
                }
              ],
              "visible": false,
              "visibleIf": "{return_of_some_other} =1"
            }
          ],
          "bottom_border": "1px solid #d4d7dc"
        }
      ]
    }, {
      "name": "page2",
      "title": "Let's confirm your marital status",
      "elements": [
        {
          "type": "panel",
          "name": "page_2_panel_1",
          "showQuestionNumbers": "off",
          "elements": [
            {
              "type": "html",
              "name": "review_marital_status",
              "html": "<div>Review your answer below and we'll recommend the best filling status later.</div>"
            }, {
              "type": "radiogroup",
              "name": "marital_status",
              "title": "On December 31, 2019 you were:",
              "choices": ["Single", "Married", "Divorced", "Legally separated", "Widowed"]
            }, {
              "type": "html",
              "name": "know_which_marital_status",
              "html": "<div>Which marital status is the right choice for me?</div>"
            }
          ]
        }
      ],
      "bottom_border" : "1px solid #d4d7dc"
    }, {
      "name": "page3",
      "title": "Do you have children or support another person?",
      "elements": [
        {
          "type": "panel",
          "name": "page_3_panel_1",
          "showQuestionNumbers": "off",
          "elements": [
            {
              "type": "html",
              "name": "do_they_qualify",
              "html": "<div>They're a big part of your life, so let's see if they will qualify as your dependent and help get you certain tax breaks this year. </div> <div>Even if you're not sure you support someone, select Yes and we'll walk through it with you and figure it out together.</div>"
            }, {
              "type": "radiogroup",
              "name": "do_you_support",
              "title": " ",
              "choices": [{"value": "1", "text": "Yes, I have children or support someone else."}, {"value": "0", "text": "No, I don't."}]
            }
          ]
        }
      ]
    }
  ]
}

window.survey = new Survey.Model(json);

survey.onUpdateQuestionCssClasses.add(
  function(sender, options){
    // This function is being called many times.
    console.log(">>>>>>>>>>>> " + options.question.getType() + " " + options.question.title);
  }
);

survey.onAfterRenderPanel.add(
  function(sender, options) {
    console.log("0000000000" + options.panel.title);
    console.log(options);
    console.log(sender);
    var classes = options.cssClasses;
    if(!options.panel.bottom_border){
      console.log("0000000000 MISSING!");
      return;
    } else {
      console.log("0000000000 YESSS -- " + options.panel.bottom_border);
      options.htmlElement.style.borderBottom = options.panel.bottom_border;
    }
  }
);

survey.onAfterRenderPage.add(
  function(sender, options){
    console.log("!!!!!!!!!!!!! onAfterRenderPage():");
    console.log(options);
    console.log(sender);
});

survey.onComplete.add(function (result) {
  console.log("You have completed the survey. Thank you.");
  console.log("Result JSON:\n" + JSON.stringify(result.data, null, 3));
  console.log(survey.getQuestionByName('state_2019').value);
});

class HomePage extends React.Component  {
  render(){
    return(
      <div>
        <div className="App__container___1YUp2">
          <section className="App__hamburgerBlanketCover___1y_d5"></section>
          <SideBar />
          <TopBar />
        </div>
      </div>
    );
  }
}

export default HomePage;
{/* <NavBar /> <div id='survey_page'>
  <Survey.Survey model={survey} css={myCss}/>
</div> */}
