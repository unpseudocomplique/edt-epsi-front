import { colors } from '../config'

export const addColorsToLessons = (lessons) => {
	let config = {
		room: '',
		teacher: '',
		name: '',
		index: 0
	}
	return lessons.map((lesson, index) => {
		const isSameLessonAsSaved =
			config.room !== lesson.room ||
			config.teacher !== lesson.teacher ||
			config.name !== lesson.name
            
		if (index === 0 || isSameLessonAsSaved) {
			config.room = lesson.room
			config.teacher = lesson.teacher
			config.name = lesson.name
		}

		if (index !== 0 && isSameLessonAsSaved) {
			config.index++
		}
		return {
			...lesson,
			color: colors[config.index]
		}
	})
}
