# react-as-image-accordion

一个React手风琴风格图文展示组件

[DEMO](http://lingyucoder.github.io/react-as-image-accordion/demo/demo.html)

## 安装

```
npm install --save react-as-image-accordion
```

## 使用

```javascript
import React from 'react';
import {
	ImageAccordion,
	ImageAccordionItem
} from 'react-as-image-accordion';

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

```

## Properties

### ImageAccordion

```javascript
{
  width: React.PropTypes.number,  //宽度，默认值900
  height: React.PropTypes.number  //高度，默认值250
}
```

### ImageAccordionItem

```javascript
{
  src: React.PropTypes.string // 背景图片地址
}
```

## 开发

```bash
$ npm start
$ open http://127.0.0.1:3000/demo/demo.html
```

## 协议

The MIT License (MIT)

Copyright (c) 2015 Lingyu Wang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
