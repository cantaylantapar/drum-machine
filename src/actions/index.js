export const selectSound = (sound) => {
  return {
    type: 'SOUND_SELECTED',
    payload: sound,
  };
};
