/**
 * Callback functions via useContext.
 */
interface SoundManagerContextType {
  /**
   * This is when user interact with the first layer
   */
  onFirstLayer: () => void;

  /**
   * Music to play when there secret button is on the screen.
   */
  onSecretVisible: () => void;

  /**
   * Music to play when there secret button is not on the screen.
   */
  onSecretNotVisible: () => void;

  /**
   * Music that plays after the user discover the secret and close the modal.
   */
  onSecretFound: () => void;
}

export default SoundManagerContextType;
