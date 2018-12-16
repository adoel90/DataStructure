var tags = [
    {tagId: 1, tagName: 'tag 1'},
    {tagId: 2, tagName: 'tag 2'},
    {tagId: 3, tagName: 'tag 3'},
    {tagId: 99, tagName: 'tag 99'}
    {tagId: 100, tagName: 'tag 100'}
];


var hasTag = function(tagName) {
    var i = null;
    for (i = 0; tags.length > i; i += 1) {
        if (tags[i].tagName === tagName) {
            return true;
        }
    }
     
    return false;
};