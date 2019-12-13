import React, { useState } from 'camunda-modeler-plugin-helpers/react';
import { Modal } from 'camunda-modeler-plugin-helpers/components';

import InspectorView from './InspectorView';

// polyfill upcoming structural components
const Title = Modal.Title || (({ children }) => <h2>{ children }</h2>);
const Body = Modal.Body || (({ children }) => <div>{ children }</div>);
const Footer = Modal.Footer || (({ children }) => <div>{ children }</div>);

export default function InspectorModal({ onClose, json }) {

  const [ definitions, setDefinitions ] = useState(json);

  return <Modal onClose={ onClose }>
    <Title>
      Object Tree Inspector
    </Title>

    <Body>
      <InspectorView
        json={ definitions }
        onChange={ json => setDefinitions(json) } />
    </Body>

    <Footer>
      <div id="inspector-buttons">
        <button
          type="button"
          disabled={ true }
          onClick={ () => onClose(definitions) }>
            Save
        </button>
      </div>
    </Footer>
  </Modal>;
}
