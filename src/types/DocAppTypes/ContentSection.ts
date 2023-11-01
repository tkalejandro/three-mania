type ContentSection = {
  /**
   * Content Section, refer to all nested category documantation with their children.
   */
  [key: string]: ContentSection | string;
};

export default ContentSection;
