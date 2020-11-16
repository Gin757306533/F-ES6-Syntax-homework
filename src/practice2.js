const inject = (items, sections) =>{
    const result = [...items];
    sections.sort((section1, section2) => section2.index - section1.index);
    sections.map((section) =>{
        result.splice(section.index, 0, section.content);
    });
    return result;
}
export { inject };
