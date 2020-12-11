import "../styles"
// TODO: this is horrible. eventually use React to have some actual control over the layout
import "./download"
import {replaceStaffCodeWithUnicodeApp} from "./replace"

replaceStaffCodeWithUnicodeApp()

// TODO: I think we may just want multiple folders within dist
//  One for the app, and one for other stuff like the bbCode stuff
//  Clean up the "archive" folder and have whatever you need of the usage and replacement exist in src
//  And then don't mix generated (excluded) and non-generated stuff
