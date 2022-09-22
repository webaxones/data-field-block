/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/AttributeControl.js":
/*!********************************************!*\
  !*** ./src/components/AttributeControl.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




const AttributeControl = _ref => {
  let {
    selected,
    onChange,
    postMetas
  } = _ref;
  const productAttributesArray = [];
  postMetas && postMetas.forEach(attribute => {
    productAttributesArray.push({
      label: attribute['name'],
      value: attribute['id']
    });
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display attribute from this product', 'datafieldblock'),
    value: selected,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('-- Select a WooCommerce attribute --', 'datafieldblock'),
      value: ''
    }, ...productAttributesArray],
    onChange: onChange
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AttributeControl);

/***/ }),

/***/ "./src/components/FieldTypeControl.js":
/*!********************************************!*\
  !*** ./src/components/FieldTypeControl.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




const FieldTypeControl = _ref => {
  let {
    postType,
    selected,
    onChange
  } = _ref;
  let field_types = [{
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Meta field', 'datafieldblock'),
    slug: 'meta'
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Taxonomy terms list', 'datafieldblock'),
    slug: 'taxonomy'
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Magic field', 'datafieldblock'),
    slug: 'magic'
  }];
  'product' === postType && field_types.push({
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('WooCommerce attribute', 'datafieldblock'),
    slug: 'attribute'
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display field types', 'datafieldblock'),
    value: selected,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('-- Select a type --', 'datafieldblock'),
      value: ''
    }, ...field_types.map(_ref2 => {
      let {
        name,
        slug
      } = _ref2;
      return {
        label: name,
        value: slug
      };
    })],
    onChange: onChange
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FieldTypeControl);

/***/ }),

/***/ "./src/components/HTMLTagControl.js":
/*!******************************************!*\
  !*** ./src/components/HTMLTagControl.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




const HTMLTagControl = _ref => {
  let {
    selected,
    onChange,
    fieldType
  } = _ref;
  let htmlTagsOptions = [];

  if ('meta' === fieldType || 'attribute' === fieldType) {
    htmlTagsOptions = [{
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<div>', 'datafieldblock'),
      slug: 'div'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<span>', 'datafieldblock'),
      slug: 'span'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<p>', 'datafieldblock'),
      slug: 'p'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<h1>', 'datafieldblock'),
      slug: 'h1'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<h2>', 'datafieldblock'),
      slug: 'h2'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<h3>', 'datafieldblock'),
      slug: 'h3'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<h4>', 'datafieldblock'),
      slug: 'h4'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<h5>', 'datafieldblock'),
      slug: 'h5'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<h6>', 'datafieldblock'),
      slug: 'h6'
    }];
  }

  if ('taxonomy' === fieldType) {
    htmlTagsOptions = [{
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<span>', 'datafieldblock'),
      slug: 'span'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<p>', 'datafieldblock'),
      slug: 'p'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<a>', 'datafieldblock'),
      slug: 'a'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<h1>', 'datafieldblock'),
      slug: 'h1'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<h2>', 'datafieldblock'),
      slug: 'h2'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<h3>', 'datafieldblock'),
      slug: 'h3'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<h4>', 'datafieldblock'),
      slug: 'h4'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<h5>', 'datafieldblock'),
      slug: 'h5'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<h6>', 'datafieldblock'),
      slug: 'h6'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<span><a>', 'datafieldblock'),
      slug: 'span>a'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<p><a>', 'datafieldblock'),
      slug: 'p>a'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<h1><a>', 'datafieldblock'),
      slug: 'h1>a'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<h2><a>', 'datafieldblock'),
      slug: 'h2>a'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<h3><a>', 'datafieldblock'),
      slug: 'h3>a'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<h4><a>', 'datafieldblock'),
      slug: 'h4>a'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<h5><a>', 'datafieldblock'),
      slug: 'h5>a'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<h6><a>', 'datafieldblock'),
      slug: 'h6>a'
    }];
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('HTML tag', 'datafieldblock'),
    value: selected,
    options: [...htmlTagsOptions.map(_ref2 => {
      let {
        name,
        slug
      } = _ref2;
      return {
        label: name,
        value: slug
      };
    })],
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('HTML tag to use for the element', 'datafieldblock'),
    onChange: onChange
  });
};

/* harmony default export */ __webpack_exports__["default"] = (HTMLTagControl);

/***/ }),

/***/ "./src/components/MetaControl.js":
/*!***************************************!*\
  !*** ./src/components/MetaControl.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




const MetaControl = _ref => {
  let {
    selected,
    onChange,
    postMetas
  } = _ref;
  const postMetasArray = Object.entries(postMetas).map(postMeta => ({
    label: postMeta[0],
    value: postMeta[0]
  }));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display meta from this post type', 'datafieldblock'),
    value: selected,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('-- Select a meta --', 'datafieldblock'),
      value: ''
    }, ...postMetasArray],
    onChange: onChange
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MetaControl);

/***/ }),

/***/ "./src/components/MetaTypeControl.js":
/*!*******************************************!*\
  !*** ./src/components/MetaTypeControl.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




const MetaTypeControl = _ref => {
  let {
    selected,
    onChange
  } = _ref;
  const FIELD_TYPES = [{
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Custom field', 'datafieldblock'),
    slug: 'customField'
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Advanced custom field', 'datafieldblock'),
    slug: 'advancedCustomField'
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display custom field types', 'datafieldblock'),
    value: selected,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('-- Select a custom field type --', 'datafieldblock'),
      value: ''
    }, ...FIELD_TYPES.map(_ref2 => {
      let {
        name,
        slug
      } = _ref2;
      return {
        label: name,
        value: slug
      };
    })],
    onChange: onChange
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MetaTypeControl);

/***/ }),

/***/ "./src/components/Settings.js":
/*!************************************!*\
  !*** ./src/components/Settings.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FieldTypeControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FieldTypeControl */ "./src/components/FieldTypeControl.js");
/* harmony import */ var _HTMLTagControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HTMLTagControl */ "./src/components/HTMLTagControl.js");
/* harmony import */ var _MetaTypeControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MetaTypeControl */ "./src/components/MetaTypeControl.js");
/* harmony import */ var _MetaControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MetaControl */ "./src/components/MetaControl.js");
/* harmony import */ var _TaxonomyControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TaxonomyControl */ "./src/components/TaxonomyControl.js");
/* harmony import */ var _AttributeControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AttributeControl */ "./src/components/AttributeControl.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);











const Settings = _ref => {
  let {
    args,
    postType,
    attributes,
    setAttributes
  } = _ref;
  const {
    fieldType,
    term,
    field,
    metaType,
    magicSuffix,
    textAlign,
    separator,
    title,
    tagName,
    counter,
    attributeId
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FieldTypeControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    postType: postType,
    selected: fieldType,
    onChange: value => {
      setAttributes({
        fieldType: value
      });
    }
  }), 'magic' === fieldType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('content within Magic field has to be coded with filter.', 'datafieldblock'))), 'magic' === fieldType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    autoComplete: "off",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Filter callback function name suffix ', 'datafieldblock'),
    value: magicSuffix || '',
    onChange: value => {
      if (null !== value.match('^[a-z_]+$')) {
        setAttributes({
          magicSuffix: value
        });
      }
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Enter a unique suffix (lowercase letters without accent and underscores accepted) for the filter callback function name. The callback function will be named: "data_field_block_get_magic_content_{suffix}" so the suffix must be unique.', 'datafieldblock')
  }), '' !== magicSuffix && undefined !== magicSuffix && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", {
    style: {
      fontSize: '9px'
    }
  }, 'data_field_block_get_magic_content_' + magicSuffix))), 'meta' === fieldType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MetaTypeControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selected: metaType,
    onChange: value => {
      setAttributes({
        metaType: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MetaControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    selected: field,
    postMetas: args,
    onChange: value => {
      setAttributes({
        field: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('content within tag can be seen in console and altered with filter:', 'datafieldblock'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, "data_field_block_get_block_content"))), 'attribute' === fieldType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AttributeControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selected: attributeId,
    postMetas: args,
    onChange: value => {
      setAttributes({
        attributeId: Number(value)
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('content within tag can be seen in console and altered with filter:', 'datafieldblock'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, "data_field_block_get_block_content"))), 'taxonomy' === fieldType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TaxonomyControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    taxonomies: args,
    selected: term,
    onChange: value => {
      setAttributes({
        term: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    autoComplete: "off",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Separator', 'datafieldblock'),
    value: separator || '',
    onChange: value => {
      setAttributes({
        separator: value
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Enter character(s) used to separate terms', 'datafieldblock')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    autoComplete: "off",
    type: 'number',
    min: 0,
    max: 500,
    step: 1,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Number of elements', 'datafieldblock'),
    value: counter || 0,
    onChange: value => {
      setAttributes({
        counter: Number(value)
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Number of elements to display: 0 for all', 'datafieldblock')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    autoComplete: "off",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Title', 'datafieldblock'),
    value: title || '',
    onChange: value => {
      setAttributes({
        title: value
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Title preceding the elements', 'datafieldblock')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HTMLTagControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selected: tagName,
    fieldType: fieldType,
    onChange: value => {
      setAttributes({
        tagName: value
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.AlignmentToolbar, {
    value: textAlign,
    onChange: nextAlign => {
      setAttributes({
        textAlign: nextAlign
      });
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./src/components/TaxonomyControl.js":
/*!*******************************************!*\
  !*** ./src/components/TaxonomyControl.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




const TaxonomyControl = _ref => {
  let {
    selected,
    onChange,
    taxonomies
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display terms from this taxonomy', 'datafieldblock'),
    value: selected,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('-- Select a taxonomy --', 'datafieldblock'),
      value: ''
    }, ...taxonomies.map(_ref2 => {
      let {
        name,
        slug
      } = _ref2;
      return {
        label: name,
        value: slug
      };
    })],
    onChange: onChange
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TaxonomyControl);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Settings */ "./src/components/Settings.js");
/* harmony import */ var _hooks_usePostTerms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/usePostTerms */ "./src/hooks/usePostTerms.js");
/* harmony import */ var _hooks_usePostTaxonomies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/usePostTaxonomies */ "./src/hooks/usePostTaxonomies.js");
/* harmony import */ var _hooks_useProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useProduct */ "./src/hooks/useProduct.js");
/* harmony import */ var _hooks_usePostMetas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/usePostMetas */ "./src/hooks/usePostMetas.js");
/* harmony import */ var _hooks_selectTerm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/selectTerm */ "./src/hooks/selectTerm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_11__);













const edit = _ref => {
  let {
    attributes,
    setAttributes,
    context
  } = _ref;
  const {
    fieldType,
    field,
    metaType,
    term,
    textAlign,
    counter,
    attributeId
  } = attributes;
  const {
    postId,
    postType
  } = context;

  if (!postId || !postType) {
    return '';
  } // Get current post type taxonomies


  const {
    postTaxonomies,
    isLoadingTaxonomies
  } = (0,_hooks_usePostTaxonomies__WEBPACK_IMPORTED_MODULE_3__["default"])({
    postType
  });
  const selectedTerm = (0,_hooks_selectTerm__WEBPACK_IMPORTED_MODULE_6__["default"])(term); // Get current post terms

  const {
    postTerms,
    hasPostTerms,
    isLoadingTerms
  } = (0,_hooks_usePostTerms__WEBPACK_IMPORTED_MODULE_2__["default"])({
    postId,
    term: selectedTerm,
    counter
  }); // Get current post metas (custom fields & advanced custom fields)

  const {
    postMetas,
    postACFs,
    isLoadingMetas,
    hasPostMetas
  } = (0,_hooks_usePostMetas__WEBPACK_IMPORTED_MODULE_5__["default"])({
    postType,
    postId
  }); // Get current post Product data if postType is product

  const {
    productData,
    isLoadingProduct
  } = (0,_hooks_useProduct__WEBPACK_IMPORTED_MODULE_4__["default"])({
    postId,
    postType
  });
  const hasPost = postId && postType;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()({
      'data-field-block': true,
      [`has-text-align-${textAlign}`]: textAlign,
      [`taxonomy-${term}`]: term
    })
  });
  let args;
  let elements; // Terms list coming from post

  if ('taxonomy' === fieldType) {
    args = postTaxonomies;
    elements = postTerms && postTerms.map(term => {
      return term.id;
    });
  } // Metadata coming from post


  if ('meta' === fieldType && 'product' !== postType && !isLoadingMetas || 'meta' === fieldType && 'product' === postType && 'advancedCustomField' === metaType && !isLoadingMetas) {
    args = 'customField' === metaType ? postMetas : postACFs;
    elements = field;
  } // Metadata coming from product


  if ('meta' === fieldType && 'product' === postType && 'customField' === metaType && !isLoadingProduct && 'meta_data' in productData) {
    args = {};
    productData.meta_data.forEach(element => {
      args[element.key] = element.value;
    });
    elements = field;
  } // Attribute coming from product


  if ('attribute' === fieldType && 'product' === postType && !isLoadingProduct && 'attributes' in productData) {
    args = productData.attributes;
    elements = attributeId;
  }

  if ('magic' === fieldType) {
    elements = {};
  } // KeepItInProductionForDevs


  args && console.log('%c Data:', 'color:gold', args);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, hasPost && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Settings__WEBPACK_IMPORTED_MODULE_1__["default"], {
    args: args,
    postType: postType,
    attributes: attributes,
    setAttributes: setAttributes
  }), term && isLoadingTerms && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Placeholder, {
    icon: "database",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Loading data…', 'datafieldblock')
  }), !isLoadingTaxonomies && ('taxonomy' === fieldType && term && !isLoadingTerms && hasPostTerms || 'meta' === fieldType && field && 'product' !== postType && !isLoadingMetas && hasPostMetas || 'meta' === fieldType && field && 'product' === postType && !isLoadingProduct || 'attribute' === fieldType && attributeId && !isLoadingProduct || 'magic' === fieldType) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_11___default()), {
    attributes: attributes,
    block: "datafieldblock/data",
    urlQueryArgs: {
      previewPostElements: elements,
      postId: postId
    }
  }), !fieldType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Placeholder, {
    icon: "database",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Data field', 'datafieldblock'),
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Please, select what you want to display', 'datafieldblock')
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/hooks/selectTerm.js":
/*!*********************************!*\
  !*** ./src/hooks/selectTerm.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);



const selectTerm = term => {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    var _taxonomy$visibility;

    if (!term) return {};
    const {
      getTaxonomy
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
    const taxonomy = getTaxonomy(term);
    return taxonomy !== null && taxonomy !== void 0 && (_taxonomy$visibility = taxonomy.visibility) !== null && _taxonomy$visibility !== void 0 && _taxonomy$visibility.publicly_queryable ? taxonomy : {};
  }, [term]);
};

/* harmony default export */ __webpack_exports__["default"] = (selectTerm);

/***/ }),

/***/ "./src/hooks/usePostMetas.js":
/*!***********************************!*\
  !*** ./src/hooks/usePostMetas.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);



const usePostMetas = _ref => {
  let {
    postType,
    postId
  } = _ref;
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      getEntityRecord,
      isResolving
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
    const {
      meta,
      acf
    } = getEntityRecord('postType', postType, postId);
    return {
      postMetas: meta,
      postACFs: acf,
      isLoadingMetas: isResolving('getEntityRecord', postType, postId),
      hasPostMetas: !!(meta !== null && meta !== void 0 && meta.length)
    };
  }, [postType, postId]);
};

/* harmony default export */ __webpack_exports__["default"] = (usePostMetas);

/***/ }),

/***/ "./src/hooks/usePostTaxonomies.js":
/*!****************************************!*\
  !*** ./src/hooks/usePostTaxonomies.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);



const usePostTaxonomies = _ref => {
  let {
    postType
  } = _ref;
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      getTaxonomies,
      isResolving
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
    const taxonomiesArgs = [{
      type: postType,
      per_page: -1,
      context: 'view'
    }];
    const taxonomies = getTaxonomies(...taxonomiesArgs);
    return {
      postTaxonomies: taxonomies,
      isLoadingTaxonomies: isResolving('getTaxonomies', taxonomiesArgs),
      hasPostTaxonomies: !!(taxonomies !== null && taxonomies !== void 0 && taxonomies.length)
    };
  }, [postType]);
};

/* harmony default export */ __webpack_exports__["default"] = (usePostTaxonomies);

/***/ }),

/***/ "./src/hooks/usePostTerms.js":
/*!***********************************!*\
  !*** ./src/hooks/usePostTerms.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);



const usePostTerms = _ref => {
  let {
    postId,
    term,
    counter
  } = _ref;
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      slug
    } = term;
    const {
      getEntityRecords,
      isResolving
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
    const howMany = 0 === counter ? -1 : counter;
    const taxonomyArgs = ['taxonomy', slug, {
      post: postId,
      per_page: howMany,
      context: 'view'
    }];
    const terms = getEntityRecords(...taxonomyArgs);
    return {
      postTerms: terms,
      isLoadingTerms: isResolving('getEntityRecords', taxonomyArgs),
      hasPostTerms: !!(terms !== null && terms !== void 0 && terms.length)
    };
  }, [postId, term, counter]);
};

/* harmony default export */ __webpack_exports__["default"] = (usePostTerms);

/***/ }),

/***/ "./src/hooks/useProduct.js":
/*!*********************************!*\
  !*** ./src/hooks/useProduct.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);



const useProduct = _ref => {
  let {
    postId,
    postType
  } = _ref;
  const [productData, setProductData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [isLoadingProduct, setIsLoadingProduct] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  if ('product' !== postType) {
    return {};
  }

  let unmounted = false;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsLoadingProduct(true);
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: `wc/v3/products/${postId}`
    }).then(res => {
      if (!unmounted) {
        setProductData(res);
        setIsLoadingProduct(false);
      }
    }).catch(error => {
      if (!unmounted) {
        console.log('error ', error);
        setIsLoadingProduct(false);
      }
    });
  }, [postId, postType]);
  return {
    productData: productData,
    isLoadingProduct: isLoadingProduct
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useProduct);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"datafieldblock/data","version":"0.1.0","title":"Data","description":"Meta field or Taxonomy terms list or WC Attributes list","category":"theme","attributes":{"fieldType":{"type":"string"},"metaType":{"type":"string","default":"customField"},"field":{"type":"string"},"term":{"type":"string"},"attributeId":{"type":"integer"},"magicSuffix":{"type":"string"},"title":{"type":"string"},"prefix":{"type":"string"},"suffix":{"type":"string"},"textAlign":{"type":"string"},"tagName":{"type":"string","default":"span"},"displayLayout":{"type":"string","default":""},"showOutline":{"type":"boolean","default":false},"counter":{"type":"number","default":0},"separator":{"type":"string","default":", "},"lastUpdate":{"type":"number","default":0}},"supports":{"html":false,"align":true,"customClassName":true,"lock":true,"color":{"text":true,"background":true,"gradients":true,"link":true},"spacing":{"margin":true,"padding":true},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontStyle":true,"__experimentalFontWeight":true,"__experimentalLetterSpacing":true,"__experimentalTextTransform":true,"__experimentalDefaultControls":{"fontSize":true}}},"usesContext":["postId","postType"],"icon":"database","textdomain":"datafieldblock","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwoocommerce_product_attributes"] = self["webpackChunkwoocommerce_product_attributes"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map