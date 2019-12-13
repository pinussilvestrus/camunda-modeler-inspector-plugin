import React, { useState } from 'camunda-modeler-plugin-helpers/react';
import { Modal } from 'camunda-modeler-plugin-helpers/components';

import InspectorView from './InspectorView';

import Icon from './json.svg';


// polyfill upcoming structural components
const Title = Modal.Title || (({ children }) => <h2>{ children }</h2>);
const Body = Modal.Body || (({ children }) => <div>{ children }</div>);
const Footer = Modal.Footer || (({ children }) => <div>{ children }</div>);

export default function InspectorModal({ onClose, json }) {

  const [ definitions, setDefinitions ] = useState(json);

  return <Modal onClose={ onClose }>
    <Title>
      <Icon className="inspector-icon-modal" /> Object Tree Inspector
    </Title>

    <Body>
      <InspectorView
        json={ definitions }
        onChange={ json => setDefinitions(json) } />
    </Body>

    <Footer>
      <div className="inspector-buttons">
        <button
          className="btn-primary"
          disabled={ true }
          onClick={ () => onClose(definitions) }>
            Save
        </button>
        <button
          className="btn-secondary"
          onClick={ () => onClose() }>
            Cancel
        </button>
      </div>
    </Footer>
  </Modal>;
}

