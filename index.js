'use strict';
const COMP = 'state-sync-9d1b95';
const _state = new WeakMap();
class Component {
  constructor(name) { _state.set(this, { name, created: Date.now(), updates: 0 }); }
  update(data) { const s = _state.get(this); s.updates++; s.lastData = data; console.log(`[${COMP}] ${s.name} updated (#${s.updates})`); }
  info() { const s = _state.get(this); return { ...s, component: COMP }; }
}
const components = ['header', 'sidebar', 'content', 'footer'].map(n => new Component(n));
components.forEach((c, i) => { for (let j = 0; j <= i; j++) c.update({ value: j }); });
components.forEach(c => console.log(`[${COMP}]`, JSON.stringify(c.info())));
