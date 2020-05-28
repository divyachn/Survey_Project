## Using SurveyJS to design a questionnaire

#### How to achieve a questionnaire similar to Turbotax?

The JSON is designed such that each page contains panels and all questions are wrapped inside it. A page may have >= 1 panel and a panel may have >=1 element (panel or question or html).

The HTML generated from the JSON has the following structure:

```html
<form>
  ...
	<div class="sv_p_root">

		<h4 class="sv_page_title"> ... </h4>	

		<div class="sv_row"> // Page level panel
			<div class="sv_p_container" style="width: 100%; flex: 1 1 100%;">
				<h4 class="sv_p_title"> ... </h4>
				<div style="display: block;">
					<div class="sv_row"> // Elements inside a panel
						<div class="sv_q sv_qstn" style="width: ?%; flex: 1 1 ?%">
							<div class>	// Question Title + Question Description
								<h5 class="sv_q_title> ... </h5>
								<div class="sv_q_description"> ... </div>
							</div>
							<div class> [Content specific to question-type] </div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>

	<div class="sv_nav">
		<input class="sv_prev_btn" type="button" style="margin-right: 5px;">
		<input class="sv_next_btn" type="button" style="margin-right: 5px;">
	</div>

</form>
```

#### Content specific to question-type:

##### Text type Question:
```html
<input class="sv_q_text_root" type="text/date/number">
```

##### Radio Button:
```html
<fieldset class="sv_qcbc">
	<legend></legend>
	<div class="sv_q_radiogroup undefined sv-q-col-1">	// Repeat
		<label class="sv_q_radiogroup_label">
			<input class="sv_q_radiogroup_control_item" type="radio">
			<span class="check"></span>
			<span class="">
				<span style="margin-left: 3px; display: inline; position: static">
					Yes/No
				</span>
			</span>
		</label>
	</div>
</fieldset>
```

##### Checkbox Button:
```html
<fieldset class="sv_qcbc sv_qcbx">
	<legend></legend>
	<div class="sv_q_checkbox undefined sv-q-col-1">	// Repeat
		<label class="sv_q_checkbox_label">
			<input classs="sv_q_checkbox_control_item" type="checkbox">
			<span class="checkbox-material">
				<span class="check"></span>
			</span>
			<span class="sv_q_checkbox_control_label">
				<span>This person passed away while on active duty</span>
			</span>
		</label>
	</div>
</fieldset>
```

##### Dropdown:
```html
<div class="">
	<div class="sv_select_wrapper">
		<select class="sv_q_dropdown_control">
			<option value="">Choose</option>	// How can it be changed?
			<option value="Albama">Albama//option/
		</select>
	</div>
</div>
```

The above class-names are generated when no theme is applied in SurveyJS.

Customize the output by targeting these classes.
