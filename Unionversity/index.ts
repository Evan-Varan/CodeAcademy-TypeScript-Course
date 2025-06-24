import courses from './courses'
import studyGroups from './studyGroups'
type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: 'course';
};

type studyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: 'group';
};

type SearchEventsOptions = {
  query: string | number;
  eventType: 'courses' | 'groups';
};

type Event = Course | studyGroup

function searchEvents(options: SearchEventsOptions): Event[]{
  let events: Event[]
  if(options.eventType === 'courses'){
    events = courses as Event[];
  }
  else{
    events = studyGroups as Event[];
  }
    return events.filter((event: Event) =>{
      if(typeof options.query === 'number'){
        if(event.id == options.query){
          return true;
        }
      }
      else if(typeof options.query === 'string'){
        if(event.keywords.includes(options.query)){
          return true;
        }
      }
      return false;
    })
}

let enrolledEvents:Event[] = []
function enroll(event: Event){
  enrolledEvents.push(event)
}

let searchResults:Event[] = searchEvents({
  query: 'art',
  eventType: 'courses'
})
console.log(searchEvents)
enroll(searchResults[0])
console.log(enrolledEvents[0])
