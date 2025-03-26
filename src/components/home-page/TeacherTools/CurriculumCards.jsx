export default function CurriculumCards({list}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {list.map((course, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
          <h3>{course.topic}</h3>
          <ul>
            {course.lessons.map((lesson, i) => (
              <li key={i}>{lesson}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}