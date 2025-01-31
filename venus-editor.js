import {css} from './css/editor.js?v=0.1';

import * as libEditor from './js/lib-editor.js';

class venusOsDashBoardEditor extends HTMLElement {
    
    async setConfig(config) {
        this._config = { ...config, entities: { ...(config.entities || {}) } };
        
        await libEditor.loadTranslations(this);
    
        if (!this.shadowRoot) {
            
            this.attachShadow({ mode: 'open' });
            
            this.shadowRoot.innerHTML = `
                <mwc-tab-bar id="link-container">
                  <mwc-tab label="Conf." data-tab="0"></mwc-tab>
                  <mwc-tab label="Col. 1" data-tab="1"></mwc-tab>
                  <mwc-tab label="Col. 2" data-tab="2"></mwc-tab>
                  <mwc-tab label="Col. 3" data-tab="3"></mwc-tab>
                </mwc-tab-bar>
        
                <div id="tab-content" class="content"></div>
              `;
            
            const container = this.shadowRoot.querySelector('#link-container');
            const style = document.createElement('style');
            style.textContent = css();
            container.appendChild(style);
    
            this._currentTab = 0;
            this._currentSubTab = 0;
            libEditor.attachLinkClick(this.renderTabContent.bind(this), this);
        }
        
        this.renderTabContent();
    }
    
    renderTabContent() {
        
        if (this._currentTab === 0) {
            
            libEditor.tab1Render(this);
            
        } else if (this._currentTab === 1) {
            
            libEditor.tabColRender(1, this);
    
        } else if (this._currentTab === 2) {
            
            libEditor.tabColRender(2, this);
            
        } else if (this._currentTab === 3) {
            
            libEditor.tabColRender(3, this);
            
        }
    
        libEditor.attachInputs(this);
        
    }
  
    set hass(hass) {
        this._hass = hass;
    }
      
    get hass() {
        return this._hass;
    }
      
    get value() {
        return this._config;
    }
}

customElements.define('venus-os-dashboard-editor', venusOsDashBoardEditor);