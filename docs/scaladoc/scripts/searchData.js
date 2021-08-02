pages = [{"l":"index.html","n":"iron","t":"iron","d":""},
{"l":"index.html","n":"index","t":"index","d":""},
{"l":"api/index.html","n":"API","t":" API","d":"api"},
{"l":"api/_empty_.html","n":"<empty>","t":"package <empty>","d":"<empty>"},
{"l":"api/_empty_/Main$.html","n":"Main","t":"object Main","d":"<empty>/Main$"},
{"l":"api/_empty_/Main$.html","n":"testAccount","t":"def testAccount: Unit","d":"<empty>/Main$"},
{"l":"api/_empty_/Main$$Account.html","n":"Account","t":"class Account(username: String, email: String, password: String)","d":"<empty>/Main$$Account"},
{"l":"api/_empty_/Main$$Account$.html","n":"Account","t":"object Account","d":"<empty>/Main$$Account$"},
{"l":"api/_empty_/Main$$Account$.html","n":"Username","t":"type Username = Constrained[String, DescribedAs[Match[\"^[a-zA-Z0-9]+\"], \"Value should be alphanumeric\"]]","d":"<empty>/Main$$Account$"},
{"l":"api/_empty_/Main$$Account$.html","n":"Email","t":"type Email = Constrained[String, DescribedAs[Match[\"^[\\\\w-\\\\.]+@([\\\\w-]+\\\\.)+[\\\\w-]{2,4}$\"], \"Value should be an email\"]]","d":"<empty>/Main$$Account$"},
{"l":"api/_empty_/Main$$Account$.html","n":"Password","t":"type Password = Constrained[String, DescribedAs[Match[\"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[a-zA-Z0-9]+\"], \"Value should contain at least an upper, a lower and a number\"]]","d":"<empty>/Main$$Account$"},
{"l":"api/_empty_/Main$$Account$.html","n":"createAccount","t":"def createAccount(username: Username, email: Email, password: Password): Either[IllegalValueError[String], Account]","d":"<empty>/Main$$Account$"},
{"l":"api/_empty_/testAccount.html","n":"testAccount","t":"class testAccount","d":"<empty>/testAccount"},
{"l":"api/_empty_/testAccount.html","n":"main","t":"def main(args: Array[String]): Unit","d":"<empty>/testAccount"},
{"l":"api/io/github/iltotore/iron.html","n":"io.github.iltotore.iron","t":"package io.github.iltotore.iron","d":"io/github/iltotore/iron"},
{"l":"api/io/github/iltotore/iron.html","n":"==>","t":"type ==>[A, B] = Constrained[A, B]","d":"io/github/iltotore/iron"},
{"l":"api/io/github/iltotore/iron.html","n":"Constrained","t":"type Constrained[A, B]","d":"io/github/iltotore/iron"},
{"l":"api/io/github/iltotore/iron.html","n":"Refined","t":"type Refined[A] = Either[IllegalValueError[A], A]","d":"io/github/iltotore/iron"},
{"l":"api/io/github/iltotore/iron.html","n":"RefinedField","t":"type RefinedField[A] = Either[Field, A]","d":"io/github/iltotore/iron"},
{"l":"api/io/github/iltotore/iron.html","n":"constrainedToValue","t":"def constrainedToValue[A, B](constrained: Constrained[A, B]): Refined[A]","d":"io/github/iltotore/iron"},
{"l":"api/io/github/iltotore/iron.html","n":"toField","t":"def toField[A](name: String): RefinedField[A]","d":"io/github/iltotore/iron"},
{"l":"api/io/github/iltotore/iron/Constrained$.html","n":"Constrained","t":"object Constrained","d":"io/github/iltotore/iron/Constrained$"},
{"l":"api/io/github/iltotore/iron/Constrained$.html","n":"apply","t":"def apply[A, B](value: Refined[A]): Constrained[A, B]","d":"io/github/iltotore/iron/Constrained$"},
{"l":"api/io/github/iltotore/iron/Main$.html","n":"Main","t":"object Main","d":"io/github/iltotore/iron/Main$"},
{"l":"api/io/github/iltotore/iron/Main$.html","n":"inverse","t":"def inverse(x: Double \\ 0.0d): Refined[Double]","d":"io/github/iltotore/iron/Main$"},
{"l":"api/io/github/iltotore/iron/Main$.html","n":"testMain","t":"def testMain: Unit","d":"io/github/iltotore/iron/Main$"},
{"l":"api/io/github/iltotore/iron/compileTime$.html","n":"compileTime","t":"object compileTime","d":"io/github/iltotore/iron/compileTime$"},
{"l":"api/io/github/iltotore/iron/compileTime$.html","n":"preAssert","t":"def preAssert[A, B, C <: Constraint[A, B]](inline input: A, inline constraint: C): Refined[A]","d":"io/github/iltotore/iron/compileTime$"},
{"l":"api/io/github/iltotore/iron/testMain.html","n":"testMain","t":"class testMain","d":"io/github/iltotore/iron/testMain"},
{"l":"api/io/github/iltotore/iron/testMain.html","n":"main","t":"def main(args: Array[String]): Unit","d":"io/github/iltotore/iron/testMain"},
{"l":"api/io/github/iltotore/iron/catsSupport.html","n":"io.github.iltotore.iron.catsSupport","t":"package io.github.iltotore.iron.catsSupport","d":"io/github/iltotore/iron/catsSupport"},
{"l":"api/io/github/iltotore/iron/catsSupport.html","n":"RefinedFieldNec","t":"type RefinedFieldNec[A] = ValidatedNec[Field, A]","d":"io/github/iltotore/iron/catsSupport"},
{"l":"api/io/github/iltotore/iron/catsSupport.html","n":"RefinedFieldNel","t":"type RefinedFieldNel[A] = ValidatedNel[Field, A]","d":"io/github/iltotore/iron/catsSupport"},
{"l":"api/io/github/iltotore/iron/catsSupport.html","n":"RefinedNec","t":"type RefinedNec[A] = ValidatedNec[IllegalValueError[_], A]","d":"io/github/iltotore/iron/catsSupport"},
{"l":"api/io/github/iltotore/iron/catsSupport.html","n":"RefinedNel","t":"type RefinedNel[A] = ValidatedNel[IllegalValueError[_], A]","d":"io/github/iltotore/iron/catsSupport"},
{"l":"api/io/github/iltotore/iron/catsSupport.html","n":"toValidatedNec","t":"def toValidatedNec[A]: RefinedNec[A]","d":"io/github/iltotore/iron/catsSupport"},
{"l":"api/io/github/iltotore/iron/catsSupport.html","n":"toValidatedNel","t":"def toValidatedNel[A]: RefinedNel[A]","d":"io/github/iltotore/iron/catsSupport"},
{"l":"api/io/github/iltotore/iron/circeSupport.html","n":"io.github.iltotore.iron.circeSupport","t":"package io.github.iltotore.iron.circeSupport","d":"io/github/iltotore/iron/circeSupport"},
{"l":"api/io/github/iltotore/iron/circeSupport.html","n":"Decoder_==>","t":"given Decoder_==>: Serializable","d":"io/github/iltotore/iron/circeSupport"},
{"l":"api/io/github/iltotore/iron/circeSupport.html","n":"Encoder_Field","t":"given Encoder_Field: Serializable","d":"io/github/iltotore/iron/circeSupport"},
{"l":"api/io/github/iltotore/iron/circeSupport.html","n":"Encoder_IllegalValueError","t":"given Encoder_IllegalValueError: Serializable","d":"io/github/iltotore/iron/circeSupport"},
{"l":"api/io/github/iltotore/iron/constraint.html","n":"io.github.iltotore.iron.constraint","t":"package io.github.iltotore.iron.constraint","d":"io/github/iltotore/iron/constraint"},
{"l":"api/io/github/iltotore/iron/constraint.html","n":"&&","t":"type &&[B, C] = And[B, C]","d":"io/github/iltotore/iron/constraint"},
{"l":"api/io/github/iltotore/iron/constraint.html","n":"==","t":"type ==[A, V] = Constrained[A, StrictEqual[V]]","d":"io/github/iltotore/iron/constraint"},
{"l":"api/io/github/iltotore/iron/constraint.html","n":"AndConstraint_A_B_C_CB_CC","t":"given AndConstraint_A_B_C_CB_CC: Constraint[A, And[B, C]]","d":"io/github/iltotore/iron/constraint"},
{"l":"api/io/github/iltotore/iron/constraint.html","n":"DescribedAsConstraint_A_B_C_V","t":"given DescribedAsConstraint_A_B_C_V: RuntimeOnly[A, DescribedAs[B, V]]","d":"io/github/iltotore/iron/constraint"},
{"l":"api/io/github/iltotore/iron/constraint.html","n":"EqualConstraint_A_V","t":"given EqualConstraint_A_V: Constraint[A, Equal[V]]","d":"io/github/iltotore/iron/constraint"},
{"l":"api/io/github/iltotore/iron/constraint.html","n":"NotConstraint_A_B_C","t":"given NotConstraint_A_B_C: Constraint[A, Not[B]]","d":"io/github/iltotore/iron/constraint"},
{"l":"api/io/github/iltotore/iron/constraint.html","n":"OrConstraint_A_B_C_CB_CC","t":"given OrConstraint_A_B_C_CB_CC: Constraint[A, Or[B, C]]","d":"io/github/iltotore/iron/constraint"},
{"l":"api/io/github/iltotore/iron/constraint.html","n":"StrictEqualConstraint_A_V","t":"given StrictEqualConstraint_A_V: Constraint[A, StrictEqual[V]]","d":"io/github/iltotore/iron/constraint"},
{"l":"api/io/github/iltotore/iron/constraint.html","n":"\\","t":"type \\[A, V] = Constrained[A, Not[StrictEqual[V]]]","d":"io/github/iltotore/iron/constraint"},
{"l":"api/io/github/iltotore/iron/constraint.html","n":"refineValue","t":"def refineValue[A, B, C <: Constraint[A, B]](value: A)(using inline constraint: C): Constrained[A, B]","d":"io/github/iltotore/iron/constraint"},
{"l":"api/io/github/iltotore/iron/constraint.html","n":"refined","t":"def refined[A](using Constraint[A, B]): Constrained[A, B]","d":"io/github/iltotore/iron/constraint"},
{"l":"api/io/github/iltotore/iron/constraint.html","n":"||","t":"type ||[B, C] = Or[B, C]","d":"io/github/iltotore/iron/constraint"},
{"l":"api/io/github/iltotore/iron/constraint/And.html","n":"And","t":"trait And[B, C]","d":"io/github/iltotore/iron/constraint/And"},
{"l":"api/io/github/iltotore/iron/constraint/AndConstraint.html","n":"AndConstraint","t":"class AndConstraint[A, B, C, CB <: Constraint[A, B], CC <: Constraint[A, C]](using left: CB, right: CC) extends Constraint[A, And[B, C]]","d":"io/github/iltotore/iron/constraint/AndConstraint"},
{"l":"api/io/github/iltotore/iron/constraint/Constraint.html","n":"Constraint","t":"trait Constraint[A, B]","d":"io/github/iltotore/iron/constraint/Constraint"},
{"l":"api/io/github/iltotore/iron/constraint/Constraint.html","n":"assert","t":"def assert(value: A): Boolean","d":"io/github/iltotore/iron/constraint/Constraint"},
{"l":"api/io/github/iltotore/iron/constraint/Constraint.html","n":"runtimeAssert","t":"def runtimeAssert(value: A): Boolean","d":"io/github/iltotore/iron/constraint/Constraint"},
{"l":"api/io/github/iltotore/iron/constraint/Constraint.html","n":"getMessage","t":"def getMessage(value: A): String","d":"io/github/iltotore/iron/constraint/Constraint"},
{"l":"api/io/github/iltotore/iron/constraint/Constraint$.html","n":"Constraint","t":"object Constraint","d":"io/github/iltotore/iron/constraint/Constraint$"},
{"l":"api/io/github/iltotore/iron/constraint/Constraint$$RuntimeOnly.html","n":"RuntimeOnly","t":"trait RuntimeOnly[A, B] extends Constraint[A, B]","d":"io/github/iltotore/iron/constraint/Constraint$$RuntimeOnly"},
{"l":"api/io/github/iltotore/iron/constraint/Constraint$$CompileTimeOnly.html","n":"CompileTimeOnly","t":"trait CompileTimeOnly[A, B] extends Constraint[A, B]","d":"io/github/iltotore/iron/constraint/Constraint$$CompileTimeOnly"},
{"l":"api/io/github/iltotore/iron/constraint/DescribedAs.html","n":"DescribedAs","t":"trait DescribedAs[B, V]","d":"io/github/iltotore/iron/constraint/DescribedAs"},
{"l":"api/io/github/iltotore/iron/constraint/DescribedAsConstraint.html","n":"DescribedAsConstraint","t":"class DescribedAsConstraint[A, B, C <: Constraint[A, B], V <: String](using constraint: C) extends RuntimeOnly[A, DescribedAs[B, V]]","d":"io/github/iltotore/iron/constraint/DescribedAsConstraint"},
{"l":"api/io/github/iltotore/iron/constraint/Equal.html","n":"Equal","t":"trait Equal[V]","d":"io/github/iltotore/iron/constraint/Equal"},
{"l":"api/io/github/iltotore/iron/constraint/EqualConstraint.html","n":"EqualConstraint","t":"class EqualConstraint[A, V <: A] extends Constraint[A, Equal[V]]","d":"io/github/iltotore/iron/constraint/EqualConstraint"},
{"l":"api/io/github/iltotore/iron/constraint/IllegalValueError.html","n":"IllegalValueError","t":"class IllegalValueError[A](input: A, message: String) extends Error","d":"io/github/iltotore/iron/constraint/IllegalValueError"},
{"l":"api/io/github/iltotore/iron/constraint/IllegalValueError.html","n":"toField","t":"def toField(name: String): Field","d":"io/github/iltotore/iron/constraint/IllegalValueError"},
{"l":"api/io/github/iltotore/iron/constraint/IllegalValueError$.html","n":"IllegalValueError","t":"object IllegalValueError","d":"io/github/iltotore/iron/constraint/IllegalValueError$"},
{"l":"api/io/github/iltotore/iron/constraint/IllegalValueError$$Field.html","n":"Field","t":"class Field(name: String, message: String) extends Error","d":"io/github/iltotore/iron/constraint/IllegalValueError$$Field"},
{"l":"api/io/github/iltotore/iron/constraint/Not.html","n":"Not","t":"trait Not[B]","d":"io/github/iltotore/iron/constraint/Not"},
{"l":"api/io/github/iltotore/iron/constraint/NotConstraint.html","n":"NotConstraint","t":"class NotConstraint[A, B, C <: Constraint[A, B]](using constraint: C) extends Constraint[A, Not[B]]","d":"io/github/iltotore/iron/constraint/NotConstraint"},
{"l":"api/io/github/iltotore/iron/constraint/Or.html","n":"Or","t":"trait Or[B, C]","d":"io/github/iltotore/iron/constraint/Or"},
{"l":"api/io/github/iltotore/iron/constraint/OrConstraint.html","n":"OrConstraint","t":"class OrConstraint[A, B, C, CB <: Constraint[A, B], CC <: Constraint[A, C]](using left: CB, right: CC) extends Constraint[A, Or[B, C]]","d":"io/github/iltotore/iron/constraint/OrConstraint"},
{"l":"api/io/github/iltotore/iron/constraint/StrictEqual.html","n":"StrictEqual","t":"trait StrictEqual[V]","d":"io/github/iltotore/iron/constraint/StrictEqual"},
{"l":"api/io/github/iltotore/iron/constraint/StrictEqualConstraint.html","n":"StrictEqualConstraint","t":"class StrictEqualConstraint[A, V <: A] extends Constraint[A, StrictEqual[V]]","d":"io/github/iltotore/iron/constraint/StrictEqualConstraint"},
{"l":"api/io/github/iltotore/iron/iterable.html","n":"io.github.iltotore.iron.iterable","t":"package io.github.iltotore.iron.iterable","d":"io/github/iltotore/iron/iterable"},
{"l":"api/io/github/iltotore/iron/iterable/constraint$.html","n":"constraint","t":"object constraint","d":"io/github/iltotore/iron/iterable/constraint$"},
{"l":"api/io/github/iltotore/iron/iterable/constraint$$given_RuntimeOnly_A_MinSize.html","n":"given_RuntimeOnly_A_MinSize","t":"given given_RuntimeOnly_A_MinSize[T, A <: Iterable[T], V <: Int]: RuntimeOnly[A, MinSize[V]]","d":"io/github/iltotore/iron/iterable/constraint$"},
{"l":"api/io/github/iltotore/iron/iterable/constraint$$given_RuntimeOnly_A_MaxSize.html","n":"given_RuntimeOnly_A_MaxSize","t":"given given_RuntimeOnly_A_MaxSize[T, A <: Iterable[T], V <: Int]: RuntimeOnly[A, MaxSize[V]]","d":"io/github/iltotore/iron/iterable/constraint$"},
{"l":"api/io/github/iltotore/iron/iterable/constraint$$given_RuntimeOnly_A_Size.html","n":"given_RuntimeOnly_A_Size","t":"given given_RuntimeOnly_A_Size[T, A <: Iterable[T], V <: Int]: RuntimeOnly[A, Size[V]]","d":"io/github/iltotore/iron/iterable/constraint$"},
{"l":"api/io/github/iltotore/iron/iterable/constraint$.html","n":"Empty","t":"type Empty = Size[0]","d":"io/github/iltotore/iron/iterable/constraint$"},
{"l":"api/io/github/iltotore/iron/iterable/constraint$$given_RuntimeOnly_A_Contains.html","n":"given_RuntimeOnly_A_Contains","t":"given given_RuntimeOnly_A_Contains[T, A <: Iterable[T], V <: T]: RuntimeOnly[A, Contains[V]]","d":"io/github/iltotore/iron/iterable/constraint$"},
{"l":"api/io/github/iltotore/iron/iterable/constraint$$MinSize.html","n":"MinSize","t":"trait MinSize[V]","d":"io/github/iltotore/iron/iterable/constraint$$MinSize"},
{"l":"api/io/github/iltotore/iron/iterable/constraint$$given_RuntimeOnly_A_MinSize.html","n":"given_RuntimeOnly_A_MinSize","t":"given given_RuntimeOnly_A_MinSize[T, A <: Iterable[T], V <: Int]: RuntimeOnly[A, MinSize[V]]","d":"io/github/iltotore/iron/iterable/constraint$$given_RuntimeOnly_A_MinSize"},
{"l":"api/io/github/iltotore/iron/iterable/constraint$$MaxSize.html","n":"MaxSize","t":"trait MaxSize[V]","d":"io/github/iltotore/iron/iterable/constraint$$MaxSize"},
{"l":"api/io/github/iltotore/iron/iterable/constraint$$given_RuntimeOnly_A_MaxSize.html","n":"given_RuntimeOnly_A_MaxSize","t":"given given_RuntimeOnly_A_MaxSize[T, A <: Iterable[T], V <: Int]: RuntimeOnly[A, MaxSize[V]]","d":"io/github/iltotore/iron/iterable/constraint$$given_RuntimeOnly_A_MaxSize"},
{"l":"api/io/github/iltotore/iron/iterable/constraint$$Size.html","n":"Size","t":"trait Size[V]","d":"io/github/iltotore/iron/iterable/constraint$$Size"},
{"l":"api/io/github/iltotore/iron/iterable/constraint$$given_RuntimeOnly_A_Size.html","n":"given_RuntimeOnly_A_Size","t":"given given_RuntimeOnly_A_Size[T, A <: Iterable[T], V <: Int]: RuntimeOnly[A, Size[V]]","d":"io/github/iltotore/iron/iterable/constraint$$given_RuntimeOnly_A_Size"},
{"l":"api/io/github/iltotore/iron/iterable/constraint$$Contains.html","n":"Contains","t":"trait Contains[V]","d":"io/github/iltotore/iron/iterable/constraint$$Contains"},
{"l":"api/io/github/iltotore/iron/iterable/constraint$$given_RuntimeOnly_A_Contains.html","n":"given_RuntimeOnly_A_Contains","t":"given given_RuntimeOnly_A_Contains[T, A <: Iterable[T], V <: T]: RuntimeOnly[A, Contains[V]]","d":"io/github/iltotore/iron/iterable/constraint$$given_RuntimeOnly_A_Contains"},
{"l":"api/io/github/iltotore/iron/numeric.html","n":"io.github.iltotore.iron.numeric","t":"package io.github.iltotore.iron.numeric","d":"io/github/iltotore/iron/numeric"},
{"l":"api/io/github/iltotore/iron/numeric.html","n":"Number","t":"type Number = Byte | Short | Int | Long | Float | Double","d":"io/github/iltotore/iron/numeric"},
{"l":"api/io/github/iltotore/iron/numeric.html","n":"modulo","t":"def modulo(x: Number, y: Number): Int","d":"io/github/iltotore/iron/numeric"},
{"l":"api/io/github/iltotore/iron/numeric/Main$.html","n":"Main","t":"object Main","d":"io/github/iltotore/iron/numeric/Main$"},
{"l":"api/io/github/iltotore/iron/numeric/Main$.html","n":"dummy","t":"def dummy(x: Int \\ 0): Unit","d":"io/github/iltotore/iron/numeric/Main$"},
{"l":"api/io/github/iltotore/iron/numeric/Main$.html","n":"dummy2","t":"def dummy2(x: Constrained[Int, Equal[0]]): Unit","d":"io/github/iltotore/iron/numeric/Main$"},
{"l":"api/io/github/iltotore/iron/numeric/Main$.html","n":"test","t":"def test: Unit","d":"io/github/iltotore/iron/numeric/Main$"},
{"l":"api/io/github/iltotore/iron/numeric/NumberOrdering$.html","n":"NumberOrdering","t":"object NumberOrdering extends InlinedOrdering[Number]","d":"io/github/iltotore/iron/numeric/NumberOrdering$"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$.html","n":"constraint","t":"object constraint","d":"io/github/iltotore/iron/numeric/constraint$"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$.html","n":"<","t":"type <[A, B] = Constrained[A, Less[B]]","d":"io/github/iltotore/iron/numeric/constraint$"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$.html","n":"LessConstraint_A_V","t":"given LessConstraint_A_V: Constraint[A, Less[V]]","d":"io/github/iltotore/iron/numeric/constraint$"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$.html","n":"<=","t":"type <=[A, B] = Constrained[A, LessEqual[B]]","d":"io/github/iltotore/iron/numeric/constraint$"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$.html","n":"LessEqualConstraint_A_V","t":"given LessEqualConstraint_A_V: Constraint[A, LessEqual[V]]","d":"io/github/iltotore/iron/numeric/constraint$"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$.html","n":">","t":"type >[A, B] = Constrained[A, Greater[B]]","d":"io/github/iltotore/iron/numeric/constraint$"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$.html","n":"Natural1","t":"type Natural1[T] = Constrained[T, T match {\n  case Byte => Greater[0]\n  case Short => Greater[0]\n  case Int => Greater[0]\n  case Long => Greater[0L]\n}]","d":"io/github/iltotore/iron/numeric/constraint$"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$.html","n":"GreaterConstraint_A_V","t":"given GreaterConstraint_A_V: Constraint[A, Greater[V]]","d":"io/github/iltotore/iron/numeric/constraint$"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$.html","n":">=","t":"type >=[A, B] = Constrained[A, GreaterEqual[B]]","d":"io/github/iltotore/iron/numeric/constraint$"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$.html","n":"Natural","t":"type Natural[T] = T >= T match {\n  case Byte => GreaterEqual[0]\n  case Short => GreaterEqual[0]\n  case Int => GreaterEqual[0]\n  case Long => GreaterEqual[0L]\n}","d":"io/github/iltotore/iron/numeric/constraint$"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$.html","n":"GreaterEqualConstraint_A_V","t":"given GreaterEqualConstraint_A_V: Constraint[A, GreaterEqual[V]]","d":"io/github/iltotore/iron/numeric/constraint$"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$.html","n":"%","t":"type %[A, B] = Constrained[A, Divisible[B]]","d":"io/github/iltotore/iron/numeric/constraint$"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$.html","n":"Even","t":"type Even[T] = Constrained[T, T match {\n  case Byte => Divisible[2]\n  case Short => Divisible[2]\n  case Int => Divisible[2]\n  case Long => Divisible[2L]\n}]","d":"io/github/iltotore/iron/numeric/constraint$"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$.html","n":"DivisibleConstraint_A_V","t":"given DivisibleConstraint_A_V: Constraint[A, Divisible[V]]","d":"io/github/iltotore/iron/numeric/constraint$"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$$Less.html","n":"Less","t":"trait Less[V]","d":"io/github/iltotore/iron/numeric/constraint$$Less"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$$LessConstraint.html","n":"LessConstraint","t":"class LessConstraint[A <: Number, V <: A] extends Constraint[A, Less[V]]","d":"io/github/iltotore/iron/numeric/constraint$$LessConstraint"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$$LessEqual.html","n":"LessEqual","t":"trait LessEqual[V]","d":"io/github/iltotore/iron/numeric/constraint$$LessEqual"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$$LessEqualConstraint.html","n":"LessEqualConstraint","t":"class LessEqualConstraint[A <: Number, V <: A] extends Constraint[A, LessEqual[V]]","d":"io/github/iltotore/iron/numeric/constraint$$LessEqualConstraint"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$$Greater.html","n":"Greater","t":"trait Greater[V]","d":"io/github/iltotore/iron/numeric/constraint$$Greater"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$$GreaterConstraint.html","n":"GreaterConstraint","t":"class GreaterConstraint[A <: Number, V <: A] extends Constraint[A, Greater[V]]","d":"io/github/iltotore/iron/numeric/constraint$$GreaterConstraint"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$$GreaterEqual.html","n":"GreaterEqual","t":"trait GreaterEqual[V]","d":"io/github/iltotore/iron/numeric/constraint$$GreaterEqual"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$$GreaterEqualConstraint.html","n":"GreaterEqualConstraint","t":"class GreaterEqualConstraint[A <: Number, V <: A] extends Constraint[A, GreaterEqual[V]]","d":"io/github/iltotore/iron/numeric/constraint$$GreaterEqualConstraint"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$$Divisible.html","n":"Divisible","t":"trait Divisible[V]","d":"io/github/iltotore/iron/numeric/constraint$$Divisible"},
{"l":"api/io/github/iltotore/iron/numeric/constraint$$DivisibleConstraint.html","n":"DivisibleConstraint","t":"class DivisibleConstraint[A <: Number, V <: A] extends Constraint[A, Divisible[V]]","d":"io/github/iltotore/iron/numeric/constraint$$DivisibleConstraint"},
{"l":"api/io/github/iltotore/iron/numeric/test.html","n":"test","t":"class test","d":"io/github/iltotore/iron/numeric/test"},
{"l":"api/io/github/iltotore/iron/numeric/test.html","n":"main","t":"def main(args: Array[String]): Unit","d":"io/github/iltotore/iron/numeric/test"},
{"l":"api/io/github/iltotore/iron/ordering.html","n":"io.github.iltotore.iron.ordering","t":"package io.github.iltotore.iron.ordering","d":"io/github/iltotore/iron/ordering"},
{"l":"api/io/github/iltotore/iron/ordering/InlinedOrdering.html","n":"InlinedOrdering","t":"trait InlinedOrdering[T]","d":"io/github/iltotore/iron/ordering/InlinedOrdering"},
{"l":"api/io/github/iltotore/iron/ordering/InlinedOrdering.html","n":"tryCompare","t":"def tryCompare(inline x: T, inline y: T): Some[Int]","d":"io/github/iltotore/iron/ordering/InlinedOrdering"},
{"l":"api/io/github/iltotore/iron/ordering/InlinedOrdering.html","n":"compare","t":"def compare(inline x: T, inline y: T): Int","d":"io/github/iltotore/iron/ordering/InlinedOrdering"},
{"l":"api/io/github/iltotore/iron/ordering/InlinedOrdering.html","n":"compareAlias","t":"def compareAlias(inline x: T, inline y: T): Int","d":"io/github/iltotore/iron/ordering/InlinedOrdering"},
{"l":"api/io/github/iltotore/iron/ordering/InlinedOrdering.html","n":"lteq","t":"def lteq(inline x: T, inline y: T): Boolean","d":"io/github/iltotore/iron/ordering/InlinedOrdering"},
{"l":"api/io/github/iltotore/iron/ordering/InlinedOrdering.html","n":"gteq","t":"def gteq(inline x: T, inline y: T): Boolean","d":"io/github/iltotore/iron/ordering/InlinedOrdering"},
{"l":"api/io/github/iltotore/iron/ordering/InlinedOrdering.html","n":"lt","t":"def lt(inline x: T, inline y: T): Boolean","d":"io/github/iltotore/iron/ordering/InlinedOrdering"},
{"l":"api/io/github/iltotore/iron/ordering/InlinedOrdering.html","n":"gt","t":"def gt(inline x: T, inline y: T): Boolean","d":"io/github/iltotore/iron/ordering/InlinedOrdering"},
{"l":"api/io/github/iltotore/iron/ordering/InlinedOrdering.html","n":"equiv","t":"def equiv(inline x: T, inline y: T): Boolean","d":"io/github/iltotore/iron/ordering/InlinedOrdering"},
{"l":"api/io/github/iltotore/iron/ordering/InlinedOrdering.html","n":"max","t":"def max[U <: T](inline x: U, inline y: U): U","d":"io/github/iltotore/iron/ordering/InlinedOrdering"},
{"l":"api/io/github/iltotore/iron/ordering/InlinedOrdering.html","n":"min","t":"def min[U <: T](inline x: U, inline y: U): U","d":"io/github/iltotore/iron/ordering/InlinedOrdering"},
{"l":"api/io/github/iltotore/iron/ordering/InlinedOrdering.html","n":"on","t":"def on[U](inline f: U => T): Ordering[U]","d":"io/github/iltotore/iron/ordering/InlinedOrdering"},
{"l":"api/io/github/iltotore/iron/ordering/InlinedOrdering.html","n":"orElse","t":"def orElse(inline other: Ordering[T]): Ordering[T]","d":"io/github/iltotore/iron/ordering/InlinedOrdering"},
{"l":"api/io/github/iltotore/iron/ordering/InlinedOrdering.html","n":"orElseBy","t":"def orElseBy[S](inline f: T => S)(inline ord: Ordering[S]): Ordering[T]","d":"io/github/iltotore/iron/ordering/InlinedOrdering"},
{"l":"api/io/github/iltotore/iron/ordering/InlinedOrdering$.html","n":"InlinedOrdering","t":"object InlinedOrdering","d":"io/github/iltotore/iron/ordering/InlinedOrdering$"},
{"l":"api/io/github/iltotore/iron/ordering/InlinedOrdering$$given_Ordering_T.html","n":"given_Ordering_T","t":"given given_Ordering_T[T](using val inlined: InlinedOrdering[T]): Ordering[T]","d":"io/github/iltotore/iron/ordering/InlinedOrdering$"},
{"l":"api/io/github/iltotore/iron/ordering/InlinedOrdering$$given_Ordering_T.html","n":"inlined","t":"val inlined: InlinedOrdering[T]","d":"io/github/iltotore/iron/ordering/InlinedOrdering$"},
{"l":"api/io/github/iltotore/iron/ordering/InlinedOrdering$$given_Ordering_T.html","n":"given_Ordering_T","t":"given given_Ordering_T[T](using val inlined: InlinedOrdering[T]): Ordering[T]","d":"io/github/iltotore/iron/ordering/InlinedOrdering$$given_Ordering_T"},
{"l":"api/io/github/iltotore/iron/ordering/InlinedOrdering$$given_Ordering_T.html","n":"inlined","t":"val inlined: InlinedOrdering[T]","d":"io/github/iltotore/iron/ordering/InlinedOrdering$$given_Ordering_T"},
{"l":"api/io/github/iltotore/iron/string.html","n":"io.github.iltotore.iron.string","t":"package io.github.iltotore.iron.string","d":"io/github/iltotore/iron/string"},
{"l":"api/io/github/iltotore/iron/string/constraint$.html","n":"constraint","t":"object constraint","d":"io/github/iltotore/iron/string/constraint$"},
{"l":"api/io/github/iltotore/iron/string/constraint$$given_RuntimeOnly_String_LowerCase$.html","n":"given_RuntimeOnly_String_LowerCase","t":"given given_RuntimeOnly_String_LowerCase: RuntimeOnly[String, LowerCase]","d":"io/github/iltotore/iron/string/constraint$"},
{"l":"api/io/github/iltotore/iron/string/constraint$$given_RuntimeOnly_String_UpperCase$.html","n":"given_RuntimeOnly_String_UpperCase","t":"given given_RuntimeOnly_String_UpperCase: RuntimeOnly[String, UpperCase]","d":"io/github/iltotore/iron/string/constraint$"},
{"l":"api/io/github/iltotore/iron/string/constraint$.html","n":"Alphanumeric","t":"type Alphanumeric = DescribedAs[Match[\"^[a-zA-Z0-9]+\"], \"Value should be alphanumeric\"]","d":"io/github/iltotore/iron/string/constraint$"},
{"l":"api/io/github/iltotore/iron/string/constraint$.html","n":"URLLike","t":"type URLLike = DescribedAs[Match[\"^(?:http(s)?:\\\\/\\\\/)?[\\\\w.-]+(?:\\\\.[\\\\w\\\\.-]+)+[\\\\w\\\\-\\\\._~:/?#[\\\\]@!\\\\$&\\'\\\\(\\\\)\\\\*\\\\+,;=.]+$\"], \"Value should be an URL\"]","d":"io/github/iltotore/iron/string/constraint$"},
{"l":"api/io/github/iltotore/iron/string/constraint$.html","n":"UUIDLike","t":"type UUIDLike = DescribedAs[Match[\"^([0-9a-fA-F]{8}\\\\-[0-9a-fA-F]{4}\\\\-[0-9a-fA-F]{4}\\\\-[0-9a-fA-F]{4}\\\\-[0-9a-fA-F]{12})\"], \"Value should be an UUID\"]","d":"io/github/iltotore/iron/string/constraint$"},
{"l":"api/io/github/iltotore/iron/string/constraint$$given_RuntimeOnly_String_Match.html","n":"given_RuntimeOnly_String_Match","t":"given given_RuntimeOnly_String_Match[V <: String]: RuntimeOnly[String, Match[V]]","d":"io/github/iltotore/iron/string/constraint$"},
{"l":"api/io/github/iltotore/iron/string/constraint$$LowerCase.html","n":"LowerCase","t":"trait LowerCase","d":"io/github/iltotore/iron/string/constraint$$LowerCase"},
{"l":"api/io/github/iltotore/iron/string/constraint$$given_RuntimeOnly_String_LowerCase$.html","n":"given_RuntimeOnly_String_LowerCase","t":"given given_RuntimeOnly_String_LowerCase: RuntimeOnly[String, LowerCase]","d":"io/github/iltotore/iron/string/constraint$$given_RuntimeOnly_String_LowerCase$"},
{"l":"api/io/github/iltotore/iron/string/constraint$$UpperCase.html","n":"UpperCase","t":"trait UpperCase","d":"io/github/iltotore/iron/string/constraint$$UpperCase"},
{"l":"api/io/github/iltotore/iron/string/constraint$$given_RuntimeOnly_String_UpperCase$.html","n":"given_RuntimeOnly_String_UpperCase","t":"given given_RuntimeOnly_String_UpperCase: RuntimeOnly[String, UpperCase]","d":"io/github/iltotore/iron/string/constraint$$given_RuntimeOnly_String_UpperCase$"},
{"l":"api/io/github/iltotore/iron/string/constraint$$Match.html","n":"Match","t":"trait Match[V]","d":"io/github/iltotore/iron/string/constraint$$Match"},
{"l":"api/io/github/iltotore/iron/string/constraint$$given_RuntimeOnly_String_Match.html","n":"given_RuntimeOnly_String_Match","t":"given given_RuntimeOnly_String_Match[V <: String]: RuntimeOnly[String, Match[V]]","d":"io/github/iltotore/iron/string/constraint$$given_RuntimeOnly_String_Match"}];