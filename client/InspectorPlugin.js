/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

/* eslint-disable no-unused-vars*/
import React, { Fragment, PureComponent } from 'camunda-modeler-plugin-helpers/react';
import { Fill } from 'camunda-modeler-plugin-helpers/components';

import InspectorModal from './InspectorModal';

import { forEach, isObject } from 'min-dash';

export default class InspectorPlugin extends PureComponent {

  state = { modalOpen: null, definitions: {} }

  constructor(props) {
    super(props);

    const {
      subscribe
    } = props;

    subscribe('bpmn.modeler.created', (event) => {

      const {
        modeler,
      } = event;

      this.modeler = modeler;
      const self = this;

      modeler.on('import.done', function(e) {
        self.setState({ definitions: modeler.getDefinitions() });
      });

    });
  }

  update() {
    const modeler = this.modeler;

    modeler.saveXML(function(err, result) {

      if (err) {
        console.log(err);
      } else {
        modeler.importXML(result);
      }

    });
  }

  handleClosed = (definitions) => {

    this.setState({ modalOpen: false });

    if (!definitions) {
      return;
    }

    const modeler = this.modeler;

    // todo(pinussilvestrus): find good way to update definitions
    // modeler._definitions = merge({}, modeler._definitions, definitions);

    this.update();
  }

  render() {
    return <Fragment>
      <Fill slot="toolbar" group="9_inspector">
        <button type="button" onClick={ () => this.setState({ modalOpen: true }) }>
        Inspect
        </button>
      </Fill>
      { this.state.modalOpen && (
        <InspectorModal
          onClose={ this.handleClosed.bind(this) }
          json={ this.state.definitions }
        />
      )}
    </Fragment>;
  }
}



// helpers //////////////

function log(...args) {
  console.log('[JSONPlugin]', ...args);
}

// @Deprecated
function merge(target, ...sources) {

  if (!sources.length) {
    return target;
  }

  forEach(sources, function(source) {

    // skip non-obj sources, i.e. null
    if (!source|| !isObject(source)) {
      return;
    }

    target.$descriptor = source.$descriptor || target.$descriptor;

    forEach(Object.getOwnPropertyNames(source), function(key) {

      const sourceVal = source[key];

      if (key === '__proto__') {
        return;
      }

      let targetVal = target[key];

      if (isObject(sourceVal)) {

        if (!isObject(targetVal)) {

          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }

    });
  });

  return target;

}
