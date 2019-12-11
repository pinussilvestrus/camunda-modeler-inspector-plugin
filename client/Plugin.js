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

export default class Plugin extends PureComponent {
  constructor(props) {
    super(props);

    const {
      subscribe
    } = props;

    subscribe('bpmn.modeler.created', (event) => {

      const {
        modeler,
      } = event;

      modeler.on('import.done', function(e) {
        const definitions = modeler.getDefinitions();

        log(definitions);

      });

      log('Modeler created for tab', modeler);

    });
  }

  render() {

    return null;
  }
}



// helpers //////////////

function log(...args) {
  console.log('[JSONPlugin]', ...args);
}
