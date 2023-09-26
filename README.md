# KTPinBlock

A Kotlin implementation of [PIN Block formats](https://www.eftlab.com/knowledge-base/complete-list-of-pin-blocks).

## About TODOs

We should always avoid merging dead codes to `develop` or `main` branch. However, due to the scope of tasks and communication restriction, certain doubts may not be clarified before merging.

In this case, it is OK to merge dead codes, but only with explicit TODO messages. These should be treated as tech debts, and Jira/GitHub issues should be raised for each item.

## Naming convention

Please note that this section is 100% subjective. I'm listing some of my thought process here, but none of them should be treated as "standards". In fact, they are just personal preferences. They can be challenged and changed anytime.

However, consistency is very important. No matter what conventions we decide to use, we should always stick to them, document them, and enforce them via code review process and even CI checks.

### About plural form

Plural forms are purposely avoided in the package and file names. The reasons are:

- Plural form in such places do not provide much additional information. 
  - For example, it should be obvious that `Exception.kt` contains all kinds of Exceptions in the package, and `ktpinlock.format` package contains all the formats.
- Plural form is tedious for refactoring.
  - For example, `ktpinlock.utility` only contains one utility class at some point, but more classes may be added anytime. While the cost of refactoring it to `ktpinlock.utilities` is not high, it's still arguably unnecessary.

But of course, plural forms should be used in other places when needed, e.g. variable names of collection types.