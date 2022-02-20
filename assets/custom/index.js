function activate(id) {
  var li = document.getElementsByTagName("UL").item(0).children;
  for (j = 0; j <= li.length - 1; j++) {
    //   alert(li[j].getElementsByTagName('a')[0].id );
    li[j].getElementsByTagName("a")[0].classList.remove("active");
    if (li[j].getElementsByTagName("a")[0].id === id) {
      // alert(li[j].getElementsByTagName("a")[0].id+" same "+id);
      li[j].getElementsByTagName("a")[0].classList.add("active");
    } else if ("top" == id) {
      document.getElementById("home").classList.add("active");
    }
  }
}
