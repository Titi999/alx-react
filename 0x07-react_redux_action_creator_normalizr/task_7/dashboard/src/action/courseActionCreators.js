import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export function selectCourse(index) {
	return {
		type: SELECT_COURSE,
		index: index,
	};
}

export function unSelectCourse(index) {
	return {
		type: UNSELECT_COURSE,
		index: index,
	};
}


const boundSelectCourse = selectCourse.bind(SELECT_COURSE);
const boundUnSelectCOurse= selectCourse.bind(UNSELECT_COURSE);
