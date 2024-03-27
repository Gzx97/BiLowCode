export enum NODE_TYPE {
    /** 折线图 */
    CHART_LINE = 'CHART_LINE',
    /** 饼图 */
    CHART_PIE = 'CHART_PIE',
    /** TODO:
     *  ...其他图表
     * */

    /** 标题 */
    H5_TITLE = 'H5_TITLE',
    /** 段落 */
    H5_PARAGRAPH = 'H5_PARAGRAPH',
    /** 图片 */
    H5_IMAGE = 'H5_IMAGE',
    /** TODO:
     *  ...其他H5元素
     * */

    /** 其他 */
    // ORDER = 'ORDER',
}

export enum NODE_TYPE_GROUP {
    /** 图表 */
    CHART = 'CHART',
    /** H5表标签 */
    H5 = 'H5',
    /** 自定义组件 */
    CUSTOM = 'CUSTOM',
}
