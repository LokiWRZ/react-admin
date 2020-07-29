import React from 'react';
import {
	ImageAccordion,
	ImageAccordionItem
} from '../src/index';

React.render(
  <ImageAccordion width={900} height={250}>
  	<ImageAccordionItem src="http://michaelferry.com/assets/accordion1.jpg">
  		<h2>Part I</h2>
      <p>Write Something here</p>
  	</ImageAccordionItem>
  	<ImageAccordionItem src="http://michaelferry.com/assets/accordion2.jpg">
  		<h2>Part II</h2>
      <p>Write Something here</p>
  	</ImageAccordionItem>
  	<ImageAccordionItem src="http://michaelferry.com/assets/accordion3.jpg">
  		<h2>Part III</h2>
      <p>Write Something here</p>
  	</ImageAccordionItem>
  	<ImageAccordionItem src="http://michaelferry.com/assets/accordion4.jpg">
  		<h2>Part IV</h2>
      <p>Write Something here</p>
  	</ImageAccordionItem>
  	<ImageAccordionItem src="http://michaelferry.com/assets/accordion5.jpg">
  		<h2>Part V</h2>
      <p>Write Something here</p>
  	</ImageAccordionItem>
  	<ImageAccordionItem src="http://michaelferry.com/assets/accordion6.jpg">
  		<h2>Part VI</h2>
      <p>Write Something here</p>
  	</ImageAccordionItem>
  </ImageAccordion>,
  document.getElementById('demo')
);
