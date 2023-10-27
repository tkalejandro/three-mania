type LifeHighlights = {
    /**
     * Id of the life highlight
     */
    id: number
    /**
     * Title that I had
     */
    title: string,
    /**
     * Entity , Company etc...
     */
    entity: string,
    /**
     * Starting Date
     */
    startDate: Date,
    /**
     * Ending Date or currently in this highlight.
     */
    endDate?: Date,
    /**
     * Entity explanation
     */
    explanation?: string
    /**
     * City where this happen
     */
    city?: string,
    /**
     * Country where this happened
     */
    country: string,
    /**
     * Was it online?
     */
    online: boolean,
    /**
     * Title before the highlights in this position
     */
    subtitle: string,
    /**
     * Achievements, goals, tasks etc...
     */
    highlights?: string[]

    /**
     * IF user want to highlight this experience. Can be use to know what is more important.
     */
    important?: boolean
}

export default LifeHighlights