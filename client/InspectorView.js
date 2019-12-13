import React from 'camunda-modeler-plugin-helpers/react';

import JSONInput from 'react-json-editor-ajrm';

import locale from 'react-json-editor-ajrm/locale/en';

import { forEach, isObject, isArray, map } from 'min-dash';

export default function InspectorView({ json, onChange }) {

  json = ensureAllProps({}, json);

  const handleChange = ({ jsObject }) => onChange(jsObject);

  const handleKeyDown = (event) => {
    const {
      keyCode,
      ctrlKey,
      metaKey
    } = event;

    if (keyCode === 67 && (ctrlKey || metaKey)) { // <C>
      event.preventDefault();

      document.execCommand('copy');
    }
  };

  return (
    <div onKeyDown={ handleKeyDown }>
      <JSONInput
        id='json-editor'
        placeholder={ json }
        onChange={ handleChange }
        locale={ locale }
        theme='light_mitsuketa_tribute'
        onKeyPressUpdate={ false }
        height="500px"
        width="100%"
        confirmGood={ false }
        viewOnly={ true }
      />
    </div>
  );

}

// helpers /////

const skipKeys = [
  'bpmnElement',
  '$parent',
  'outgoing',
  'incoming'
];

function ensureAllProps(target, source) {

  forEach(Object.getOwnPropertyNames(source), key => {
    const sourceVal = source[key];

    if (key === '__proto__') {
      return;
    }

    if (skipKeys.includes(key)) {
      target[key] = (source[key] || {}).id;
      return target;
    }

    let targetVal = target[key];

    if (isObject(sourceVal)) {

      if (!isObject(targetVal)) {

        // override target[key] with object
        targetVal = {};
      }

      target[key] = ensureAllProps(targetVal, sourceVal);
    } else if (isArray(sourceVal)) {
      target[key] = map(sourceVal, s => ensureAllProps({}, s));
    } else {
      target[key] = sourceVal;
    }
  });

  return target;
}