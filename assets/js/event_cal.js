document.addEventListener('DOMContentLoaded', function () {
	var calendarEl = document.getElementById('calendar');
	var calendar = new FullCalendar.Calendar(calendarEl, {
		eventClick: function (info) {
			var eventObj = info.event;

			if (eventObj.url) {
				window.open(eventObj.url);
				info.jsEvent.preventDefault();
			} else {
				alert(eventObj.title + '\n' + eventObj.extendedProps.dsp);
			}
		},
		initialView: window.innerWidth >= 765 ? 'dayGridMonth' : 'listWeek',
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,dayGridWeek,listWeek,dayGridDay'
		}, buttonText: { today: 'Today' },
		eventDisplay: "block",
		events: [
			{
				title: 'HS Indoor Practice',
				classNames: ['HSInPractice'],
				daysOfWeek: [1],
				startTime: '17:30',
				endTime: '19:30',
				startRecur: '2026-02-02',
				endRecur: '2026-02-17',
				extendedProps: { dsp: '5:30-7:30 at Hendricks County Fairgrounds' }
			},
			{
				title: 'HS Indoor Practice',
				classNames: ['HSInPractice'],
				start: '2026-02-05 17:30',
				end: '2026-02-05 19:30',
				extendedProps: { dsp: '5:30-7:30 at Hendricks County Fairgrounds' }
			},
			{
				title: 'HS Indoor Practice',
				classNames: ['HSInPractice'],
				start: '2026-02-11 17:30',
				end: '2026-02-11 19:30',
				extendedProps: { dsp: '5:30-7:30 at Hendricks County Fairgrounds' }
			},
			{
				title: 'HS Indoor Practice',
				classNames: ['HSInPractice'],
				start: '2026-02-19 17:30',
				end: '2026-02-19 19:30',
				extendedProps: { dsp: '5:30-7:30 at Hendricks County Fairgrounds' }
			},
			{
				title: 'HS Outdoor Practice',
				classNames: ['HSInPractice'],
				daysOfWeek: [1, 2, 3, 4],
				startTime: '17:30',
				endTime: '18:30',
				startRecur: '2026-02-23',
				endRecur: '2026-03-06',
				extendedProps: { dsp: '5:30-6:30 at Home Pitch' }
			},
			{
				title: 'HS Girls Practice',
				classNames: ['HSGirlsPractice'],
				daysOfWeek: [1, 2, 3, 4],
				startTime: '18:00',
				endTime: '19:30',
				startRecur: '2026-03-09',
				endRecur: '2026-04-03',
				extendedProps: { dsp: '6:00-7:30 at Home Pitch' }
			},
			{
				title: 'HS Boys Practice',
				classNames: ['HSBoysPractice'],
				daysOfWeek: [1, 2, 3, 4],
				startTime: '18:00',
				endTime: '19:30',
				startRecur: '2026-03-09',
				endRecur: '2026-04-03',
				extendedProps: { dsp: '6:00-7:30 at Home Pitch' }
			},
			{
				title: 'HS Girls Practice',
				classNames: ['HSGirlsPractice'],
				daysOfWeek: [1, 2, 4],
				startTime: '18:00',
				endTime: '19:30',
				startRecur: '2026-04-06',
				endRecur: '2026-05-21',
				extendedProps: { dsp: '6:00-7:30 at Home Pitch' }
			},
			{
				title: 'HS Boys Practice',
				classNames: ['HSBoysPractice'],
				daysOfWeek: [1, 2, 4],
				startTime: '18:00',
				endTime: '19:30',
				startRecur: '2026-04-06',
				endRecur: '2026-05-21',
				extendedProps: { dsp: '6:00-7:30 at Home Pitch' }
			},

			{
				title: 'Revenge @ Zionsville',
				classNames: ['HSGirls'],
				start: '2026-04-08 18:00',
				end: '',
				extendedProps: { dsp: '6:00 at Zionsville' }
			},
			{
				title: 'Revenge vs Ft Wayne Narwhals',
				classNames: ['HSGirls'],
				start: '2026-04-11 14:00',
				end: '',
				extendedProps: { dsp: '2:00 at Home Pitch' }
			},
			{
				title: 'Revenge vs Westfield',
				classNames: ['HSGirls'],
				start: '2026-04-15 18:00',
				end: '',
				extendedProps: { dsp: '6:00 at Home Pitch' }
			},
			{
				title: 'Revenge @ Warsaw',
				classNames: ['HSGirls'],
				start: '2026-04-18 12:00',
				end: '',
				extendedProps: { dsp: '12:00 at Warsaw' }
			},
			{
				title: 'Revenge @ Carmel A',
				classNames: ['HSGirls'],
				start: '2026-04-22',
				end: '',
				extendedProps: { dsp: 'tbd at Carmel' }
			},
			{
				title: 'Revenge @ Midwest Invitational',
				classNames: ['HSGirls'],
				start: '2026-04-25',
				end: '',
				extendedProps: { dsp: 'at Moose Rugby Grounds, Elkhart' }
			},
			{
				title: 'Revenge @ Midwest Invitational',
				classNames: ['HSGirls'],
				start: '2026-04-26',
				end: '',
				extendedProps: { dsp: 'at Moose Rugby Grounds, Elkhart' }
			},
			{
				title: 'Revenge vs Ft Wayne Chargers',
				classNames: ['HSGirls'],
				start: '2026-05-02 15:00',
				end: '',
				extendedProps: { dsp: '3:00 at Home Pitch, Senior Day' }
			},

			{
				title: 'Indiana Rugby HS Semi State',
				classNames: ['HSCommon'],
				start: '2026-05-23',
				end: '',
				extendedProps: { dsp: 'TBD' }
			},
			{
				title: 'Indiana Rugby HS State',
				classNames: ['HSCommon'],
				start: '2026-05-25',
				end: '',
				extendedProps: { dsp: 'TBD' }
			},
			{
				title: 'Black Swarm @ Noblesville',
				classNames: ['HSBoysPractice'],
				start: '2026-03-07 13:00',
				end: '',
				extendedProps: { dsp: '1:00 scrimmage at Noblesville' }
			},
			{
				title: 'Black Swarm @ Homestead',
				classNames: ['HSBoysPractice'],
				start: '2026-03-14 13:00',
				end: '',
				extendedProps: { dsp: '1:00 scrimmage at Homestead' }
			},
			{
				title: 'Black Swarm @ Homestead',
				classNames: ['HSBoysPractice'],
				start: '2026-03-21 13:00',
				end: '',
				extendedProps: { dsp: '1:00 scrimmage at Homestead' }
			},
			{
				title: 'Black Swarm vs Zionsville',
				classNames: ['HSBoys'],
				start: '2026-04-18 12:00',
				end: '',
				extendedProps: { dsp: '12:00 at Home Pitch' }
			},
			{
				title: 'Black Swarm @ Louisville',
				classNames: ['HSBoys'],
				start: '2026-04-25 14:00',
				end: '',
				extendedProps: { dsp: '2:00 at Louisville' }
			},
			{
				title: 'Black Swarm @ Noblesville',
				classNames: ['HSBoys'],
				start: '2026-04-29 18:00',
				end: '',
				extendedProps: { dsp: '6:00 at Noblesville' }
			},
			{
				title: 'Black Swarm @ Leo',
				classNames: ['HSBoys'],
				start: '2026-05-02 13:00',
				end: '',
				extendedProps: { dsp: '1:00 at Leo' }
			},
			{
				title: 'Black Swarm vs Columbus',
				classNames: ['HSBoys'],
				start: '2026-05-06 18:00',
				end: '',
				extendedProps: { dsp: '6:00 at Home Pitch, Senior Night' }
			},
			{
				title: 'Black Swarm @ Royal Irish',
				classNames: ['HSBoys'],
				start: '2026-05-15',
				end: '',
				extendedProps: { dsp: 'TBD at Kuntz Stadium' }
			},

			{
				title: 'Outcasts @ Impalas',
				classNames: ['GameOutcasts'],
				start: '2026-04-11',
				end: '',
				extendedProps: { dsp: 'TBD at Indianapolis' }
			},
			{
				title: 'Outcasts vs TBD',
				classNames: ['GameOutcasts'],
				start: '2026-04-18',
				end: '',
				extendedProps: { dsp: 'TBD at Avon' }
			},
			{
				title: 'Outcasts @ Louisville',
				classNames: ['GameOutcasts'],
				start: '2026-04-25',
				end: '',
				extendedProps: { dsp: 'TBD at Louisville' }
			},
			{
				title: 'Outcasts vs Ft Wayne',
				classNames: ['GameOutcasts'],
				start: '2026-05-02',
				end: '',
				extendedProps: { dsp: 'TBD at Avon' }
			},
			{
				title: 'Outcasts vs White River',
				classNames: ['GameOutcasts'],
				start: '2026-05-09',
				end: '',
				extendedProps: { dsp: 'TBD at Carmel' }
			},
			{
				title: 'Outcasts @ Cincinnati',
				classNames: ['GameOutcasts'],
				start: '2026-05-16',
				end: '',
				extendedProps: { dsp: 'TBD at Cincinnati' }
			},
			{
				title: 'Outcasts vs Columbus',
				classNames: ['GameOutcasts'],
				start: '2026-05-23',
				end: '',
				extendedProps: { dsp: 'TBD at Avon' }
			},

			{
				title: 'Outcasts Practice',
				classNames: ['PracticeOutcasts'],
				start: '2026-03-10 18:00',
				end: '2026-03-10 19:30',
				extendedProps: { dsp: '6:00-7:30 at Home Pitch' }
			},
			{
				title: '5-6th Grade (Co-ed) Practice',
				classNames: ['CoedPractice'],
				start: '2026-03-10 17:30',
				end: '2026-03-10 19:00',
				extendedProps: { dsp: '5:30-7:00 at Home Pitch' }
			},
			{
				title: 'Flag (Co-ed) Practice',
				classNames: ['FlagPractice'],
				start: '2026-03-10 18:00',
				end: '2026-03-10 19:00',
				extendedProps: { dsp: '6:00-7:00 at Home Pitch' }
			},
			{
				title: 'Unified Practice',
				classNames: ['UnityPractice'],
				start: '2026-03-11 17:00',
				end: '2026-03-11 18:00',
				extendedProps: { dsp: '5:00-6:00 at Home Pitch' }
			},
			{
				title: 'MS Girls Practice',
				classNames: ['MSGirlsPractice'],
				start: '2026-03-10 18:00',
				end: '2026-03-10 19:30',
				extendedProps: { dsp: '6:00-7:30 at Home Pitch' }
			},

		]
	});
	calendar.render();
});