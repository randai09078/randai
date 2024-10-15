import { defineStore } from "pinia";
import type { SettingsState } from "./helper";
import {
	defaultSetting,
	getLocalState,
	removeLocalState,
	setLocalState,
} from "./helper";
import { useChatStore } from "@/store";
export const useSettingStore = defineStore("setting-store", {
	state: (): SettingsState => getLocalState(),
	actions: {
		updateSetting(settings: Partial<SettingsState>) {
			this.$state = { ...this.$state, ...settings };
			this.recordState();
		},
    getIsisStream(): boolean {
      if (this.$state.isStream) {
        const chatStore = useChatStore();
        const currentConversation = chatStore.currentConversation;
    
        if (currentConversation.modelInfo?.isStream) {
          const languages = currentConversation.modelInfo.languages;
    
          if (currentConversation.type === "research") {
            return true;
          }
    
          if (
            languages &&
            currentConversation.lang &&
            languages.includes(currentConversation.lang) &&
            currentConversation.type !== "image"
          ) {
            return true;
          }
        }
        return false;
      } else {
        return false;
      }
    },
    
		resetSetting() {
			this.$state = defaultSetting();
			removeLocalState();
		},

		recordState() {
			setLocalState(this.$state);
		},
	},
});
