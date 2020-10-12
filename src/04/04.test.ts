test("should take old persons older then 90", () => {

    const ages = [18, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test("should take only cheapest courses", () => {

    const courses = [
        {title: "css", price: 100},
        {title: "JS", price: 200},
        {title: "React", price: 150}]

    const chipCourses = courses.filter((course: CourseType) => course.price < 160);

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("css");
    expect(chipCourses[1].title).toBe("React");
})