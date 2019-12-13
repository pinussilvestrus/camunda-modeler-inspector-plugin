import React, { Fragment, PureComponent } from 'camunda-modeler-plugin-helpers/react';
import { Fill } from 'camunda-modeler-plugin-helpers/components';

import InspectorModal from './InspectorModal';

import { forEach, isObject, find } from 'min-dash';

import Icon from './json.svg';

export default class InspectorPlugin extends PureComponent {

  state = {
    activeTab: null,
    modalOpen: null,
    definitions: {},
    modelers: []
  }

  constructor(props) {
    super(props);

    const {
      subscribe
    } = props;

    subscribe('bpmn.modeler.created', (event) => {

      const {
        modeler,
        tab
      } = event;

      const {
        modelers
      } = this.state;

      modelers.push({
        tab: tab.id,
        modeler
      });
    });

    subscribe('app.activeTabChanged', ({ activeTab }) => {
      this.setState({ activeTab });
    });
  }

  getModeler(tab) {
    const found = find(this.state.modelers, m => m.tab === tab.id);

    return found ? found.modeler : null;
  }

  openModal = () => {
    const {
      activeTab
    } = this.state;

    const modeler = this.getModeler(activeTab);

    this.setState({
      modalOpen: true,
      definitions: modeler.getDefinitions()
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

    // todo(pinussilvestrus): find good way to update definitions
    // const modeler = this.modeler;
    // modeler._definitions = merge({}, modeler._definitions, definitions);

    this.update();
  }

  render() {
    return <Fragment>
      <Fill slot="toolbar" group="9_inspector">
        <Icon className="inspector-icon" onClick={ this.openModal } />
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

// eslint-disable-next-line
function log(...args) {
  console.log('[JSONPlugin]', ...args);
}

// @Deprecated
// eslint-disable-next-line
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
