export const dataSettings = state => state.profile.settings;
export const statusDeleteAccount = state => state.profile.delete_account;

export const dataUsername = state => state.profile.profile.name || "";
export const dataEmail = state => state.profile.profile.email || "";
export const dataCountry = state => state.profile.profile.country || "";
export const dataAvatar = state => state.profile.profile.avatar;
export const statusModalReset = state => state.profile.modalReset;