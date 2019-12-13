import React from 'camunda-modeler-plugin-helpers/react';

import JSONInput from 'react-json-editor-ajrm';

import locale from 'react-json-editor-ajrm/locale/en';

import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

export default function InspectorView({ json, onChange }) {

  // todo(pinussilvestrus): not showing inherited props

  const handleChange = ({ jsObject }) => onChange(jsObject);

  return (
    <div>
      { true && <JSONInput
        id='json-editor'
        placeholder={ json }
        onChange={ handleChange }
        locale={ locale }
        theme='light_mitsuketa_tribute'
        onKeyPressUpdate={ false }
        confirmGood={ false }
        viewOnly={ true }
      /> }

      {
        false && <Editor
          value={ json }
          onChange={ handleChange }
        />
      }
    </div>
  );

}