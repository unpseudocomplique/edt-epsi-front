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

export const getDatesBetweenDates = (startDate: Date, endDate: Date) => {
	let dates = []
	//to avoid modifying the original date
	const theDate = new Date(startDate)
	while (theDate <= endDate) {
		dates = [...dates, new Date(theDate)]
		theDate.setDate(theDate.getDate() + 1)
	}
	return dates
}
