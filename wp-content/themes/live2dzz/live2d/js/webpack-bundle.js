(() => {
  "use strict";
  var t = {
      266: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismDefaultParameterId = void 0, e.CubismDefaultParameterId = Object.freeze({
          HitAreaPrefix: "HitArea",
          HitAreaHead: "Head",
          HitAreaBody: "Body",
          PartsIdCore: "Parts01Core",
          PartsArmPrefix: "Parts01Arm_",
          PartsArmLPrefix: "Parts01ArmL_",
          PartsArmRPrefix: "Parts01ArmR_",
          ParamAngleX: "ParamAngleX",
          ParamAngleY: "ParamAngleY",
          ParamAngleZ: "ParamAngleZ",
          ParamEyeLOpen: "ParamEyeLOpen",
          ParamEyeLSmile: "ParamEyeLSmile",
          ParamEyeROpen: "ParamEyeROpen",
          ParamEyeRSmile: "ParamEyeRSmile",
          ParamEyeBallX: "ParamEyeBallX",
          ParamEyeBallY: "ParamEyeBallY",
          ParamEyeBallForm: "ParamEyeBallForm",
          ParamBrowLY: "ParamBrowLY",
          ParamBrowRY: "ParamBrowRY",
          ParamBrowLX: "ParamBrowLX",
          ParamBrowRX: "ParamBrowRX",
          ParamBrowLAngle: "ParamBrowLAngle",
          ParamBrowRAngle: "ParamBrowRAngle",
          ParamBrowLForm: "ParamBrowLForm",
          ParamBrowRForm: "ParamBrowRForm",
          ParamMouthForm: "ParamMouthForm",
          ParamMouthOpenY: "ParamMouthOpenY",
          ParamCheek: "ParamCheek",
          ParamBodyAngleX: "ParamBodyAngleX",
          ParamBodyAngleY: "ParamBodyAngleY",
          ParamBodyAngleZ: "ParamBodyAngleZ",
          ParamBreath: "ParamBreath",
          ParamArmLA: "ParamArmLA",
          ParamArmRA: "ParamArmRA",
          ParamArmLB: "ParamArmLB",
          ParamArmRB: "ParamArmRB",
          ParamHandL: "ParamHandL",
          ParamHandR: "ParamHandR",
          ParamHairFront: "ParamHairFront",
          ParamHairSide: "ParamHairSide",
          ParamHairBack: "ParamHairBack",
          ParamHairFluffy: "ParamHairFluffy",
          ParamShoulderY: "ParamShoulderY",
          ParamBustX: "ParamBustX",
          ParamBustY: "ParamBustY",
          ParamBaseX: "ParamBaseX",
          ParamBaseY: "ParamBaseY",
          ParamNONE: "NONE:"
        });
        var a, s = o(i(266));
        (a = e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).HitAreaBody = s.CubismDefaultParameterId.HitAreaBody, a.HitAreaHead = s.CubismDefaultParameterId.HitAreaHead, a.HitAreaPrefix = s.CubismDefaultParameterId.HitAreaPrefix, a.ParamAngleX = s.CubismDefaultParameterId.ParamAngleX, a.ParamAngleY = s.CubismDefaultParameterId.ParamAngleY, a.ParamAngleZ = s.CubismDefaultParameterId.ParamAngleZ, a.ParamArmLA = s.CubismDefaultParameterId.ParamArmLA, a.ParamArmLB = s.CubismDefaultParameterId.ParamArmLB, a.ParamArmRA = s.CubismDefaultParameterId.ParamArmRA, a.ParamArmRB = s.CubismDefaultParameterId.ParamArmRB, a.ParamBaseX = s.CubismDefaultParameterId.ParamBaseX, a.ParamBaseY = s.CubismDefaultParameterId.ParamBaseY, a.ParamBodyAngleX = s.CubismDefaultParameterId.ParamBodyAngleX, a.ParamBodyAngleY = s.CubismDefaultParameterId.ParamBodyAngleY, a.ParamBodyAngleZ = s.CubismDefaultParameterId.ParamBodyAngleZ, a.ParamBreath = s.CubismDefaultParameterId.ParamBreath, a.ParamBrowLAngle = s.CubismDefaultParameterId.ParamBrowLAngle, a.ParamBrowLForm = s.CubismDefaultParameterId.ParamBrowLForm, a.ParamBrowLX = s.CubismDefaultParameterId.ParamBrowLX, a.ParamBrowLY = s.CubismDefaultParameterId.ParamBrowLY, a.ParamBrowRAngle = s.CubismDefaultParameterId.ParamBrowRAngle, a.ParamBrowRForm = s.CubismDefaultParameterId.ParamBrowRForm, a.ParamBrowRX = s.CubismDefaultParameterId.ParamBrowRX, a.ParamBrowRY = s.CubismDefaultParameterId.ParamBrowRY, a.ParamBustX = s.CubismDefaultParameterId.ParamBustX, a.ParamBustY = s.CubismDefaultParameterId.ParamBustY, a.ParamCheek = s.CubismDefaultParameterId.ParamCheek, a.ParamEyeBallForm = s.CubismDefaultParameterId.ParamEyeBallForm, a.ParamEyeBallX = s.CubismDefaultParameterId.ParamEyeBallX, a.ParamEyeBallY = s.CubismDefaultParameterId.ParamEyeBallY, a.ParamEyeLOpen = s.CubismDefaultParameterId.ParamEyeLOpen, a.ParamEyeLSmile = s.CubismDefaultParameterId.ParamEyeLSmile, a.ParamEyeROpen = s.CubismDefaultParameterId.ParamEyeROpen, a.ParamEyeRSmile = s.CubismDefaultParameterId.ParamEyeRSmile, a.ParamHairBack = s.CubismDefaultParameterId.ParamHairBack, a.ParamHairFluffy = s.CubismDefaultParameterId.ParamHairFluffy, a.ParamHairFront = s.CubismDefaultParameterId.ParamHairFront, a.ParamHairSide = s.CubismDefaultParameterId.ParamHairSide, a.ParamHandL = s.CubismDefaultParameterId.ParamHandL, a.ParamHandR = s.CubismDefaultParameterId.ParamHandR, a.ParamMouthForm = s.CubismDefaultParameterId.ParamMouthForm, a.ParamMouthOpenY = s.CubismDefaultParameterId.ParamMouthOpenY, a.ParamNONE = s.CubismDefaultParameterId.ParamNONE, a.ParamShoulderY = s.CubismDefaultParameterId.ParamShoulderY, a.PartsArmLPrefix = s.CubismDefaultParameterId.PartsArmLPrefix, a.PartsArmPrefix = s.CubismDefaultParameterId.PartsArmPrefix, a.PartsArmRPrefix = s.CubismDefaultParameterId.PartsArmRPrefix, a.PartsIdCore = s.CubismDefaultParameterId.PartsIdCore
      },
      300: (t, e) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.CSM_LOG_LEVEL = e.CSM_LOG_LEVEL_OFF = e.CSM_LOG_LEVEL_ERROR = e.CSM_LOG_LEVEL_WARNING = e.CSM_LOG_LEVEL_INFO = e.CSM_LOG_LEVEL_DEBUG = e.CSM_LOG_LEVEL_VERBOSE = void 0, e.CSM_LOG_LEVEL_VERBOSE = 0, e.CSM_LOG_LEVEL_DEBUG = 1, e.CSM_LOG_LEVEL_INFO = 2, e.CSM_LOG_LEVEL_WARNING = 3, e.CSM_LOG_LEVEL_ERROR = 4, e.CSM_LOG_LEVEL_OFF = 5, e.CSM_LOG_LEVEL = e.CSM_LOG_LEVEL_VERBOSE
      },
      741: function (t, e, i) {
        var r, n = this && this.__extends || (r = function (t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function (t, e) {
                t.__proto__ = e
              } || function (t, e) {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
              })(t, e)
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function i() {
              this.constructor = t
            }
            r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
          }),
          o = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          a = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          s = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && o(e, t, i);
            return a(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismModelSettingJson = void 0;
        var u, l = i(280),
          h = i(348),
          c = i(177),
          d = i(127),
          p = "FileReferences",
          m = "UserData",
          g = "Name",
          f = "File",
          _ = "Ids",
          y = "Sound",
          b = "FadeInTime",
          v = "FadeOutTime",
          C = "LipSync",
          S = "EyeBlink";
        ! function (t) {
          t[t.FrequestNode_Groups = 0] = "FrequestNode_Groups", t[t.FrequestNode_Moc = 1] = "FrequestNode_Moc", t[t.FrequestNode_Motions = 2] = "FrequestNode_Motions", t[t.FrequestNode_Expressions = 3] = "FrequestNode_Expressions", t[t.FrequestNode_Textures = 4] = "FrequestNode_Textures", t[t.FrequestNode_Physics = 5] = "FrequestNode_Physics", t[t.FrequestNode_Pose = 6] = "FrequestNode_Pose", t[t.FrequestNode_HitAreas = 7] = "FrequestNode_HitAreas"
        }(u || (u = {}));
        var P = function (t) {
          function e(e, i) {
            var r = t.call(this) || this;
            return r._json = d.CubismJson.create(e, i), r._json && (r._jsonValue = new c.csmVector, r._jsonValue.pushBack(r._json.getRoot().getValueByString("Groups")), r._jsonValue.pushBack(r._json.getRoot().getValueByString(p).getValueByString("Moc")), r._jsonValue.pushBack(r._json.getRoot().getValueByString(p).getValueByString("Motions")), r._jsonValue.pushBack(r._json.getRoot().getValueByString(p).getValueByString("Expressions")), r._jsonValue.pushBack(r._json.getRoot().getValueByString(p).getValueByString("Textures")), r._jsonValue.pushBack(r._json.getRoot().getValueByString(p).getValueByString("Physics")), r._jsonValue.pushBack(r._json.getRoot().getValueByString(p).getValueByString("Pose")), r._jsonValue.pushBack(r._json.getRoot().getValueByString("HitAreas"))), r
          }
          return n(e, t), e.prototype.release = function () {
            d.CubismJson.delete(this._json), this._jsonValue = null
          }, e.prototype.GetJson = function () {
            return this._json
          }, e.prototype.getModelFileName = function () {
            return this.isExistModelFile() ? this._jsonValue.at(u.FrequestNode_Moc).getRawString() : ""
          }, e.prototype.getTextureCount = function () {
            return this.isExistTextureFiles() ? this._jsonValue.at(u.FrequestNode_Textures).getSize() : 0
          }, e.prototype.getTextureDirectory = function () {
            return this._jsonValue.at(u.FrequestNode_Textures).getRawString()
          }, e.prototype.getTextureFileName = function (t) {
            return this._jsonValue.at(u.FrequestNode_Textures).getValueByIndex(t).getRawString()
          }, e.prototype.getHitAreasCount = function () {
            return this.isExistHitAreas() ? this._jsonValue.at(u.FrequestNode_HitAreas).getSize() : 0
          }, e.prototype.getHitAreaId = function (t) {
            return h.CubismFramework.getIdManager().getId(this._jsonValue.at(u.FrequestNode_HitAreas).getValueByIndex(t).getValueByString("Id").getRawString())
          }, e.prototype.getHitAreaName = function (t) {
            return this._jsonValue.at(u.FrequestNode_HitAreas).getValueByIndex(t).getValueByString(g).getRawString()
          }, e.prototype.getPhysicsFileName = function () {
            return this.isExistPhysicsFile() ? this._jsonValue.at(u.FrequestNode_Physics).getRawString() : ""
          }, e.prototype.getPoseFileName = function () {
            return this.isExistPoseFile() ? this._jsonValue.at(u.FrequestNode_Pose).getRawString() : ""
          }, e.prototype.getExpressionCount = function () {
            return this.isExistExpressionFile() ? this._jsonValue.at(u.FrequestNode_Expressions).getSize() : 0
          }, e.prototype.getExpressionName = function (t) {
            return this._jsonValue.at(u.FrequestNode_Expressions).getValueByIndex(t).getValueByString(g).getRawString()
          }, e.prototype.getExpressionFileName = function (t) {
            return this._jsonValue.at(u.FrequestNode_Expressions).getValueByIndex(t).getValueByString(f).getRawString()
          }, e.prototype.getMotionGroupCount = function () {
            return this.isExistMotionGroups() ? this._jsonValue.at(u.FrequestNode_Motions).getKeys().getSize() : 0
          }, e.prototype.getMotionGroupName = function (t) {
            return this.isExistMotionGroups() ? this._jsonValue.at(u.FrequestNode_Motions).getKeys().at(t) : null
          }, e.prototype.getMotionCount = function (t) {
            return this.isExistMotionGroupName(t) ? this._jsonValue.at(u.FrequestNode_Motions).getValueByString(t).getSize() : 0
          }, e.prototype.getMotionFileName = function (t, e) {
            return this.isExistMotionGroupName(t) ? this._jsonValue.at(u.FrequestNode_Motions).getValueByString(t).getValueByIndex(e).getValueByString(f).getRawString() : ""
          }, e.prototype.getMotionSoundFileName = function (t, e) {
            return this.isExistMotionSoundFile(t, e) ? this._jsonValue.at(u.FrequestNode_Motions).getValueByString(t).getValueByIndex(e).getValueByString(y).getRawString() : ""
          }, e.prototype.getMotionFadeInTimeValue = function (t, e) {
            return this.isExistMotionFadeIn(t, e) ? this._jsonValue.at(u.FrequestNode_Motions).getValueByString(t).getValueByIndex(e).getValueByString(b).toFloat() : -1
          }, e.prototype.getMotionFadeOutTimeValue = function (t, e) {
            return this.isExistMotionFadeOut(t, e) ? this._jsonValue.at(u.FrequestNode_Motions).getValueByString(t).getValueByIndex(e).getValueByString(v).toFloat() : -1
          }, e.prototype.getUserDataFile = function () {
            return this.isExistUserDataFile() ? this._json.getRoot().getValueByString(p).getValueByString(m).getRawString() : ""
          }, e.prototype.getLayoutMap = function (t) {
            var e = this._json.getRoot().getValueByString("Layout").getMap();
            if (null == e) return !1;
            for (var i = !1, r = e.begin(); r.notEqual(e.end()); r.preIncrement()) t.setValue(r.ptr().first, r.ptr().second.toFloat()), i = !0;
            return i
          }, e.prototype.getEyeBlinkParameterCount = function () {
            if (!this.isExistEyeBlinkParameters()) return 0;
            for (var t = 0, e = 0; e < this._jsonValue.at(u.FrequestNode_Groups).getSize(); e++) {
              var i = this._jsonValue.at(u.FrequestNode_Groups).getValueByIndex(e);
              if (!i.isNull() && !i.isError() && i.getValueByString(g).getRawString() == S) {
                t = i.getValueByString(_).getVector().getSize();
                break
              }
            }
            return t
          }, e.prototype.getEyeBlinkParameterId = function (t) {
            if (!this.isExistEyeBlinkParameters()) return null;
            for (var e = 0; e < this._jsonValue.at(u.FrequestNode_Groups).getSize(); e++) {
              var i = this._jsonValue.at(u.FrequestNode_Groups).getValueByIndex(e);
              if (!i.isNull() && !i.isError() && i.getValueByString(g).getRawString() == S) return h.CubismFramework.getIdManager().getId(i.getValueByString(_).getValueByIndex(t).getRawString())
            }
            return null
          }, e.prototype.getLipSyncParameterCount = function () {
            if (!this.isExistLipSyncParameters()) return 0;
            for (var t = 0, e = 0; e < this._jsonValue.at(u.FrequestNode_Groups).getSize(); e++) {
              var i = this._jsonValue.at(u.FrequestNode_Groups).getValueByIndex(e);
              if (!i.isNull() && !i.isError() && i.getValueByString(g).getRawString() == C) {
                t = i.getValueByString(_).getVector().getSize();
                break
              }
            }
            return t
          }, e.prototype.getLipSyncParameterId = function (t) {
            if (!this.isExistLipSyncParameters()) return null;
            for (var e = 0; e < this._jsonValue.at(u.FrequestNode_Groups).getSize(); e++) {
              var i = this._jsonValue.at(u.FrequestNode_Groups).getValueByIndex(e);
              if (!i.isNull() && !i.isError() && i.getValueByString(g).getRawString() == C) return h.CubismFramework.getIdManager().getId(i.getValueByString(_).getValueByIndex(t).getRawString())
            }
            return null
          }, e.prototype.isExistModelFile = function () {
            var t = this._jsonValue.at(u.FrequestNode_Moc);
            return !t.isNull() && !t.isError()
          }, e.prototype.isExistTextureFiles = function () {
            var t = this._jsonValue.at(u.FrequestNode_Textures);
            return !t.isNull() && !t.isError()
          }, e.prototype.isExistHitAreas = function () {
            var t = this._jsonValue.at(u.FrequestNode_HitAreas);
            return !t.isNull() && !t.isError()
          }, e.prototype.isExistPhysicsFile = function () {
            var t = this._jsonValue.at(u.FrequestNode_Physics);
            return !t.isNull() && !t.isError()
          }, e.prototype.isExistPoseFile = function () {
            var t = this._jsonValue.at(u.FrequestNode_Pose);
            return !t.isNull() && !t.isError()
          }, e.prototype.isExistExpressionFile = function () {
            var t = this._jsonValue.at(u.FrequestNode_Expressions);
            return !t.isNull() && !t.isError()
          }, e.prototype.isExistMotionGroups = function () {
            var t = this._jsonValue.at(u.FrequestNode_Motions);
            return !t.isNull() && !t.isError()
          }, e.prototype.isExistMotionGroupName = function (t) {
            var e = this._jsonValue.at(u.FrequestNode_Motions).getValueByString(t);
            return !e.isNull() && !e.isError()
          }, e.prototype.isExistMotionSoundFile = function (t, e) {
            var i = this._jsonValue.at(u.FrequestNode_Motions).getValueByString(t).getValueByIndex(e).getValueByString(y);
            return !i.isNull() && !i.isError()
          }, e.prototype.isExistMotionFadeIn = function (t, e) {
            var i = this._jsonValue.at(u.FrequestNode_Motions).getValueByString(t).getValueByIndex(e).getValueByString(b);
            return !i.isNull() && !i.isError()
          }, e.prototype.isExistMotionFadeOut = function (t, e) {
            var i = this._jsonValue.at(u.FrequestNode_Motions).getValueByString(t).getValueByIndex(e).getValueByString(v);
            return !i.isNull() && !i.isError()
          }, e.prototype.isExistUserDataFile = function () {
            var t = this._json.getRoot().getValueByString(p).getValueByString(m);
            return !t.isNull() && !t.isError()
          }, e.prototype.isExistEyeBlinkParameters = function () {
            if (this._jsonValue.at(u.FrequestNode_Groups).isNull() || this._jsonValue.at(u.FrequestNode_Groups).isError()) return !1;
            for (var t = 0; t < this._jsonValue.at(u.FrequestNode_Groups).getSize(); ++t)
              if (this._jsonValue.at(u.FrequestNode_Groups).getValueByIndex(t).getValueByString(g).getRawString() == S) return !0;
            return !1
          }, e.prototype.isExistLipSyncParameters = function () {
            if (this._jsonValue.at(u.FrequestNode_Groups).isNull() || this._jsonValue.at(u.FrequestNode_Groups).isError()) return !1;
            for (var t = 0; t < this._jsonValue.at(u.FrequestNode_Groups).getSize(); ++t)
              if (this._jsonValue.at(u.FrequestNode_Groups).getValueByIndex(t).getValueByString(g).getRawString() == C) return !0;
            return !1
          }, e
        }(l.ICubismModelSetting);
        e.CubismModelSettingJson = P;
        var M = s(i(741));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismModelSettingJson = M.CubismModelSettingJson
      },
      552: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.BreathParameterData = e.CubismBreath = void 0;
        var a = function () {
          function t() {
            this._currentTime = 0
          }
          return t.create = function () {
            return new t
          }, t.delete = function (t) {
            null != t && (t = null)
          }, t.prototype.setParameters = function (t) {
            this._breathParameters = t
          }, t.prototype.getParameters = function () {
            return this._breathParameters
          }, t.prototype.updateParameters = function (t, e) {
            this._currentTime += e;
            for (var i = 2 * this._currentTime * 3.14159, r = 0; r < this._breathParameters.getSize(); ++r) {
              var n = this._breathParameters.at(r);
              t.addParameterValueById(n.parameterId, n.offset + n.peak * Math.sin(i / n.cycle), n.weight)
            }
          }, t
        }();
        e.CubismBreath = a;
        e.BreathParameterData = function (t, e, i, r, n) {
          this.parameterId = null == t ? null : t, this.offset = null == e ? 0 : e, this.peak = null == i ? 0 : i, this.cycle = null == r ? 0 : r, this.weight = null == n ? 0 : n
        };
        var s, u = o(i(552));
        (s = e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).BreathParameterData = u.BreathParameterData, s.CubismBreath = u.CubismBreath
      },
      483: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.EyeState = e.CubismEyeBlink = void 0;
        var a, s = i(177),
          u = function () {
            function t(t) {
              if (this._blinkingState = a.EyeState_First, this._nextBlinkingTime = 0, this._stateStartTimeSeconds = 0, this._blinkingIntervalSeconds = 4, this._closingSeconds = .1, this._closedSeconds = .05, this._openingSeconds = .15, this._userTimeSeconds = 0, this._parameterIds = new s.csmVector, null != t)
                for (var e = 0; e < t.getEyeBlinkParameterCount(); ++e) this._parameterIds.pushBack(t.getEyeBlinkParameterId(e))
            }
            return t.create = function (e) {
              return void 0 === e && (e = null), new t(e)
            }, t.delete = function (t) {
              null != t && (t = null)
            }, t.prototype.setBlinkingInterval = function (t) {
              this._blinkingIntervalSeconds = t
            }, t.prototype.setBlinkingSetting = function (t, e, i) {
              this._closingSeconds = t, this._closedSeconds = e, this._openingSeconds = i
            }, t.prototype.setParameterIds = function (t) {
              this._parameterIds = t
            }, t.prototype.getParameterIds = function () {
              return this._parameterIds
            }, t.prototype.updateParameters = function (e, i) {
              var r;
              this._userTimeSeconds += i;
              var n = 0;
              switch (this._blinkingState) {
                case a.EyeState_Closing:
                  (n = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._closingSeconds) >= 1 && (n = 1, this._blinkingState = a.EyeState_Closed, this._stateStartTimeSeconds = this._userTimeSeconds), r = 1 - n;
                  break;
                case a.EyeState_Closed:
                  (n = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._closedSeconds) >= 1 && (this._blinkingState = a.EyeState_Opening, this._stateStartTimeSeconds = this._userTimeSeconds), r = 0;
                  break;
                case a.EyeState_Opening:
                  (n = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._openingSeconds) >= 1 && (n = 1, this._blinkingState = a.EyeState_Interval, this._nextBlinkingTime = this.determinNextBlinkingTiming()), r = n;
                  break;
                case a.EyeState_Interval:
                  this._nextBlinkingTime < this._userTimeSeconds && (this._blinkingState = a.EyeState_Closing, this._stateStartTimeSeconds = this._userTimeSeconds), r = 1;
                  break;
                case a.EyeState_First:
                default:
                  this._blinkingState = a.EyeState_Interval, this._nextBlinkingTime = this.determinNextBlinkingTiming(), r = 1
              }
              t.CloseIfZero || (r = -r);
              for (var o = 0; o < this._parameterIds.getSize(); ++o) e.setParameterValueById(this._parameterIds.at(o), r)
            }, t.prototype.determinNextBlinkingTiming = function () {
              var t = Math.random();
              return this._userTimeSeconds + t * (2 * this._blinkingIntervalSeconds - 1)
            }, t.CloseIfZero = !0, t
          }();
        e.CubismEyeBlink = u,
          function (t) {
            t[t.EyeState_First = 0] = "EyeState_First", t[t.EyeState_Interval = 1] = "EyeState_Interval", t[t.EyeState_Closing = 2] = "EyeState_Closing", t[t.EyeState_Closed = 3] = "EyeState_Closed", t[t.EyeState_Opening = 4] = "EyeState_Opening"
          }(a = e.EyeState || (e.EyeState = {}));
        var l, h = o(i(483));
        (l = e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismEyeBlink = h.CubismEyeBlink, l.EyeState = h.EyeState
      },
      452: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.PartData = e.CubismPose = void 0;
        var a = i(348),
          s = i(177),
          u = i(127),
          l = "FadeInTime",
          h = "Link",
          c = function () {
            function t() {
              this._fadeTimeSeconds = .5, this._lastModel = null, this._partGroups = new s.csmVector, this._partGroupCounts = new s.csmVector
            }
            return t.create = function (e, i) {
              var r = new t,
                n = u.CubismJson.create(e, i),
                o = n.getRoot();
              o.getValueByString(l).isNull() || (r._fadeTimeSeconds = o.getValueByString(l).toFloat(.5), r._fadeTimeSeconds <= 0 && (r._fadeTimeSeconds = .5));
              for (var s = o.getValueByString("Groups"), c = s.getSize(), p = 0; p < c; ++p) {
                for (var m = s.getValueByIndex(p), g = m.getSize(), f = 0, _ = 0; _ < g; ++_) {
                  var y = m.getValueByIndex(_),
                    b = new d,
                    v = a.CubismFramework.getIdManager().getId(y.getValueByString("Id").getRawString());
                  if (b.partId = v, !y.getValueByString(h).isNull())
                    for (var C = y.getValueByString(h), S = C.getSize(), P = 0; P < S; ++P) {
                      var M = new d,
                        x = a.CubismFramework.getIdManager().getId(C.getValueByIndex(P).getString());
                      M.partId = x, b.link.pushBack(M)
                    }
                  r._partGroups.pushBack(b.clone()), ++f
                }
                r._partGroupCounts.pushBack(f)
              }
              return u.CubismJson.delete(n), r
            }, t.delete = function (t) {
              null != t && (t = null)
            }, t.prototype.updateParameters = function (t, e) {
              t != this._lastModel && this.reset(t), this._lastModel = t, e < 0 && (e = 0);
              for (var i = 0, r = 0; r < this._partGroupCounts.getSize(); r++) {
                var n = this._partGroupCounts.at(r);
                this.doFade(t, e, i, n), i += n
              }
              this.copyPartOpacities(t)
            }, t.prototype.reset = function (t) {
              for (var e = 0, i = 0; i < this._partGroupCounts.getSize(); ++i) {
                for (var r = this._partGroupCounts.at(i), n = e; n < e + r; ++n) {
                  this._partGroups.at(n).initialize(t);
                  var o = this._partGroups.at(n).partIndex,
                    a = this._partGroups.at(n).parameterIndex;
                  if (!(o < 0)) {
                    t.setPartOpacityByIndex(o, n == e ? 1 : 0), t.setParameterValueByIndex(a, n == e ? 1 : 0);
                    for (var s = 0; s < this._partGroups.at(n).link.getSize(); ++s) this._partGroups.at(n).link.at(s).initialize(t)
                  }
                }
                e += r
              }
            }, t.prototype.copyPartOpacities = function (t) {
              for (var e = 0; e < this._partGroups.getSize(); ++e) {
                var i = this._partGroups.at(e);
                if (0 != i.link.getSize())
                  for (var r = this._partGroups.at(e).partIndex, n = t.getPartOpacityByIndex(r), o = 0; o < i.link.getSize(); ++o) {
                    var a = i.link.at(o).partIndex;
                    a < 0 || t.setPartOpacityByIndex(a, n)
                  }
              }
            }, t.prototype.doFade = function (t, e, i, r) {
              for (var n = -1, o = 1, a = i; a < i + r; ++a) {
                var s = this._partGroups.at(a).partIndex,
                  u = this._partGroups.at(a).parameterIndex;
                if (t.getParameterValueByIndex(u) > .001) {
                  if (n >= 0) break;
                  n = a, o = t.getPartOpacityByIndex(s), (o += e / this._fadeTimeSeconds) > 1 && (o = 1)
                }
              }
              for (n < 0 && (n = 0, o = 1), a = i; a < i + r; ++a) {
                var l = this._partGroups.at(a).partIndex;
                if (n == a) t.setPartOpacityByIndex(l, o);
                else {
                  var h = t.getPartOpacityByIndex(l),
                    c = void 0;
                  (1 - (c = o < .5 ? -.5 * o / .5 + 1 : .5 * (1 - o) / .5)) * (1 - o) > .15 && (c = 1 - .15 / (1 - o)), h > c && (h = c), t.setPartOpacityByIndex(l, h)
                }
              }
            }, t
          }();
        e.CubismPose = c;
        var d = function () {
          function t(t) {
            if (this.parameterIndex = 0, this.partIndex = 0, this.link = new s.csmVector, null != t) {
              this.partId = t.partId;
              for (var e = t.link.begin(); e.notEqual(t.link.end()); e.preIncrement()) this.link.pushBack(e.ptr().clone())
            }
          }
          return t.prototype.assignment = function (t) {
            this.partId = t.partId;
            for (var e = t.link.begin(); e.notEqual(t.link.end()); e.preIncrement()) this.link.pushBack(e.ptr().clone());
            return this
          }, t.prototype.initialize = function (t) {
            this.parameterIndex = t.getParameterIndex(this.partId), this.partIndex = t.getPartIndex(this.partId), t.setParameterValueByIndex(this.parameterIndex, 1)
          }, t.prototype.clone = function () {
            var e = new t;
            e.partId = this.partId, e.parameterIndex = this.parameterIndex, e.partIndex = this.partIndex, e.link = new s.csmVector;
            for (var i = this.link.begin(); i.notEqual(this.link.end()); i.increment()) e.link.pushBack(i.ptr().clone());
            return e
          }, t
        }();
        e.PartData = d;
        var p, m = o(i(452));
        (p = e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismPose = m.CubismPose, p.PartData = m.PartData
      },
      280: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.ICubismModelSetting = void 0;
        e.ICubismModelSetting = function () {};
        var a = o(i(280));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).ICubismModelSetting = a.ICubismModelSetting
      },
      835: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismId = void 0;
        var a = i(590),
          s = function () {
            function t(t) {
              this._id = "string" != typeof t ? t : new a.csmString(t)
            }
            return t.prototype.getString = function () {
              return this._id
            }, t.prototype.isEqual = function (e) {
              return "string" == typeof e ? this._id.isEqual(e) : e instanceof a.csmString ? this._id.isEqual(e.s) : e instanceof t && this._id.isEqual(e._id.s)
            }, t.prototype.isNotEqual = function (e) {
              return "string" == typeof e ? !this._id.isEqual(e) : e instanceof a.csmString ? !this._id.isEqual(e.s) : e instanceof t && !this._id.isEqual(e._id.s)
            }, t
          }();
        e.CubismId = s;
        var u = o(i(835));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismId = u.CubismId
      },
      539: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismIdManager = void 0;
        var a = i(177),
          s = i(835),
          u = function () {
            function t() {
              this._ids = new a.csmVector
            }
            return t.prototype.release = function () {
              for (var t = 0; t < this._ids.getSize(); ++t) this._ids.set(t, void 0);
              this._ids = null
            }, t.prototype.registerIds = function (t) {
              for (var e = 0; e < t.length; e++) this.registerId(t[e])
            }, t.prototype.registerId = function (t) {
              var e = null;
              return "string" != typeof t ? this.registerId(t.s) : (null != (e = this.findId(t)) || (e = new s.CubismId(t), this._ids.pushBack(e)), e)
            }, t.prototype.getId = function (t) {
              return this.registerId(t)
            }, t.prototype.isExist = function (t) {
              return "string" == typeof t ? null != this.findId(t) : this.isExist(t.s)
            }, t.prototype.findId = function (t) {
              for (var e = 0; e < this._ids.getSize(); ++e)
                if (this._ids.at(e).getString().isEqual(t)) return this._ids.at(e);
              return null
            }, t
          }();
        e.CubismIdManager = u;
        var l = o(i(539));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismIdManager = l.CubismIdManager
      },
      348: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.LogLevel = e.Option = e.CubismFramework = e.csmDelete = e.Constant = e.strtod = void 0;
        var a = i(539),
          s = i(44),
          u = i(713),
          l = i(127);
        e.strtod = function (t, e) {
          for (var i = 0, r = 1;; r++) {
            var n = t.slice(r - 1, r);
            if ("e" != n && "-" != n && "E" != n) {
              var o = t.substring(0, r),
                a = Number(o);
              if (isNaN(a)) break;
              i = r
            }
          }
          var s = parseFloat(t);
          return isNaN(s) && (s = NaN), e[0] = t.slice(i), s
        };
        var h = !1,
          c = !1,
          d = null,
          p = null;
        e.Constant = Object.freeze({
          vertexOffset: 0,
          vertexStep: 2
        }), e.csmDelete = function (t) {
          t && (t = void 0)
        };
        var m = function () {
          function t() {}
          return t.startUp = function (t) {
            if (void 0 === t && (t = null), h) return u.CubismLogInfo("CubismFramework.startUp() is already done."), h;
            if (null != (d = t) && Live2DCubismCore.Logging.csmSetLogFunction(d.logFunction), h = !0) {
              var e = Live2DCubismCore.Version.csmGetVersion(),
                i = (4278190080 & e) >> 24,
                r = (16711680 & e) >> 16,
                n = 65535 & e,
                o = e;
              u.CubismLogInfo("Live2D Cubism Core version: {0}.{1}.{2} ({3})", ("00" + i).slice(-2), ("00" + r).slice(-2), ("0000" + n).slice(-4), o)
            }
            return u.CubismLogInfo("CubismFramework.startUp() is complete."), h
          }, t.cleanUp = function () {
            h = !1, c = !1, d = null, p = null
          }, t.initialize = function () {
            u.CSM_ASSERT(h), h ? c ? u.CubismLogWarning("CubismFramework.initialize() skipped, already initialized.") : (l.Value.staticInitializeNotForClientCall(), p = new a.CubismIdManager, c = !0, u.CubismLogInfo("CubismFramework.initialize() is complete.")) : u.CubismLogWarning("CubismFramework is not started.")
          }, t.dispose = function () {
            u.CSM_ASSERT(h), h ? c ? (l.Value.staticReleaseNotForClientCall(), p.release(), p = null, s.CubismRenderer.staticRelease(), c = !1, u.CubismLogInfo("CubismFramework.dispose() is complete.")) : u.CubismLogWarning("CubismFramework.dispose() skipped, not initialized.") : u.CubismLogWarning("CubismFramework is not started.")
          }, t.isStarted = function () {
            return h
          }, t.isInitialized = function () {
            return c
          }, t.coreLogFunction = function (t) {
            Live2DCubismCore.Logging.csmGetLogFunction() && Live2DCubismCore.Logging.csmGetLogFunction()(t)
          }, t.getLoggingLevel = function () {
            return null != d ? d.loggingLevel : g.LogLevel_Off
          }, t.getIdManager = function () {
            return p
          }, t
        }();
        e.CubismFramework = m;
        var g;
        e.Option = function () {},
          function (t) {
            t[t.LogLevel_Verbose = 0] = "LogLevel_Verbose", t[t.LogLevel_Debug = 1] = "LogLevel_Debug", t[t.LogLevel_Info = 2] = "LogLevel_Info", t[t.LogLevel_Warning = 3] = "LogLevel_Warning", t[t.LogLevel_Error = 4] = "LogLevel_Error", t[t.LogLevel_Off = 5] = "LogLevel_Off"
          }(g = e.LogLevel || (e.LogLevel = {}));
        var f, _ = o(i(348));
        (f = e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).Constant = _.Constant, f.csmDelete = _.csmDelete, f.CubismFramework = _.CubismFramework
      },
      736: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismMath = void 0;
        var a = i(788),
          s = function () {
            function t() {}
            return t.range = function (t, e, i) {
              return t < e ? t = e : t > i && (t = i), t
            }, t.sin = function (t) {
              return Math.sin(t)
            }, t.cos = function (t) {
              return Math.cos(t)
            }, t.abs = function (t) {
              return Math.abs(t)
            }, t.sqrt = function (t) {
              return Math.sqrt(t)
            }, t.getEasingSine = function (t) {
              return t < 0 ? 0 : t > 1 ? 1 : .5 - .5 * this.cos(t * Math.PI)
            }, t.max = function (t, e) {
              return t > e ? t : e
            }, t.min = function (t, e) {
              return t > e ? e : t
            }, t.degreesToRadian = function (t) {
              return t / 180 * Math.PI
            }, t.radianToDegrees = function (t) {
              return 180 * t / Math.PI
            }, t.directionToRadian = function (t, e) {
              for (var i = Math.atan2(e.y, e.x) - Math.atan2(t.y, t.x); i < -Math.PI;) i += 2 * Math.PI;
              for (; i > Math.PI;) i -= 2 * Math.PI;
              return i
            }, t.directionToDegrees = function (t, e) {
              var i = this.directionToRadian(t, e),
                r = this.radianToDegrees(i);
              return e.x - t.x > 0 && (r = -r), r
            }, t.radianToDirection = function (t) {
              var e = new a.CubismVector2;
              return e.x = this.sin(t), e.y = this.cos(t), e
            }, t
          }();
        e.CubismMath = s;
        var u = o(i(736));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismMath = u.CubismMath
      },
      946: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismMatrix44 = void 0;
        var a = function () {
          function t() {
            this._tr = new Float32Array(16), this.loadIdentity()
          }
          return t.multiply = function (t, e, i) {
            for (var r = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), n = 0; n < 4; ++n)
              for (var o = 0; o < 4; ++o)
                for (var a = 0; a < 4; ++a) r[o + 4 * n] += t[a + 4 * n] * e[o + 4 * a];
            for (n = 0; n < 16; ++n) i[n] = r[n]
          }, t.prototype.loadIdentity = function () {
            var t = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
            this.setMatrix(t)
          }, t.prototype.setMatrix = function (t) {
            for (var e = 0; e < 16; ++e) this._tr[e] = t[e]
          }, t.prototype.getArray = function () {
            return this._tr
          }, t.prototype.getScaleX = function () {
            return this._tr[0]
          }, t.prototype.getScaleY = function () {
            return this._tr[5]
          }, t.prototype.getTranslateX = function () {
            return this._tr[12]
          }, t.prototype.getTranslateY = function () {
            return this._tr[13]
          }, t.prototype.transformX = function (t) {
            return this._tr[0] * t + this._tr[12]
          }, t.prototype.transformY = function (t) {
            return this._tr[5] * t + this._tr[13]
          }, t.prototype.invertTransformX = function (t) {
            return (t - this._tr[12]) / this._tr[0]
          }, t.prototype.invertTransformY = function (t) {
            return (t - this._tr[13]) / this._tr[5]
          }, t.prototype.translateRelative = function (e, i) {
            var r = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, i, 0, 1]);
            t.multiply(r, this._tr, this._tr)
          }, t.prototype.translate = function (t, e) {
            this._tr[12] = t, this._tr[13] = e
          }, t.prototype.translateX = function (t) {
            this._tr[12] = t
          }, t.prototype.translateY = function (t) {
            this._tr[13] = t
          }, t.prototype.scaleRelative = function (e, i) {
            var r = new Float32Array([e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
            t.multiply(r, this._tr, this._tr)
          }, t.prototype.scale = function (t, e) {
            this._tr[0] = t, this._tr[5] = e
          }, t.prototype.multiplyByMatrix = function (e) {
            t.multiply(e.getArray(), this._tr, this._tr)
          }, t.prototype.clone = function () {
            for (var e = new t, i = 0; i < this._tr.length; i++) e._tr[i] = this._tr[i];
            return e
          }, t
        }();
        e.CubismMatrix44 = a;
        var s = o(i(946));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismMatrix44 = s.CubismMatrix44
      },
      7: function (t, e, i) {
        var r, n = this && this.__extends || (r = function (t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function (t, e) {
                t.__proto__ = e
              } || function (t, e) {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
              })(t, e)
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function i() {
              this.constructor = t
            }
            r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
          }),
          o = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          a = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          s = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && o(e, t, i);
            return a(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismModelMatrix = void 0;
        var u = function (t) {
          function e(e, i) {
            var r = t.call(this) || this;
            return r._width = void 0 !== e ? e : 0, r._height = void 0 !== i ? i : 0, r.setHeight(2), r
          }
          return n(e, t), e.prototype.setWidth = function (t) {
            var e = t / this._width,
              i = e;
            this.scale(e, i)
          }, e.prototype.setHeight = function (t) {
            var e = t / this._height,
              i = e;
            this.scale(e, i)
          }, e.prototype.setPosition = function (t, e) {
            this.translate(t, e)
          }, e.prototype.setCenterPosition = function (t, e) {
            this.centerX(t), this.centerY(e)
          }, e.prototype.top = function (t) {
            this.setY(t)
          }, e.prototype.bottom = function (t) {
            var e = this._height * this.getScaleY();
            this.translateY(t - e)
          }, e.prototype.left = function (t) {
            this.setX(t)
          }, e.prototype.right = function (t) {
            var e = this._width * this.getScaleX();
            this.translateX(t - e)
          }, e.prototype.centerX = function (t) {
            var e = this._width * this.getScaleX();
            this.translateX(t - e / 2)
          }, e.prototype.setX = function (t) {
            this.translateX(t)
          }, e.prototype.centerY = function (t) {
            var e = this._height * this.getScaleY();
            this.translateY(t - e / 2)
          }, e.prototype.setY = function (t) {
            this.translateY(t)
          }, e.prototype.setupFromLayout = function (t) {
            for (var e = t.begin(); e.notEqual(t.end()); e.preIncrement()) {
              var i = e.ptr().first,
                r = e.ptr().second;
              "width" == i ? this.setWidth(r) : "height" == i && this.setHeight(r)
            }
            for (e = t.begin(); e.notEqual(t.end()); e.preIncrement()) i = e.ptr().first, r = e.ptr().second, "x" == i ? this.setX(r) : "y" == i ? this.setY(r) : "center_x" == i ? this.centerX(r) : "center_y" == i ? this.centerY(r) : "top" == i ? this.top(r) : "bottom" == i ? this.bottom(r) : "left" == i ? this.left(r) : "right" == i && this.right(r)
          }, e
        }(i(946).CubismMatrix44);
        e.CubismModelMatrix = u;
        var l = s(i(7));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismModelMatrix = l.CubismModelMatrix
      },
      704: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismTargetPoint = void 0;
        var a = i(736),
          s = function () {
            function t() {
              this._faceTargetX = 0, this._faceTargetY = 0, this._faceX = 0, this._faceY = 0, this._faceVX = 0, this._faceVY = 0, this._lastTimeSeconds = 0, this._userTimeSeconds = 0
            }
            return t.prototype.update = function (t) {
              this._userTimeSeconds += t;
              var e = 4 / 30;
              if (0 != this._lastTimeSeconds) {
                var i = 30 * (this._userTimeSeconds - this._lastTimeSeconds);
                this._lastTimeSeconds = this._userTimeSeconds;
                var r = i * e / 4.5,
                  n = this._faceTargetX - this._faceX,
                  o = this._faceTargetY - this._faceY;
                if (!(a.CubismMath.abs(n) <= .01 && a.CubismMath.abs(o) <= .01)) {
                  var s = a.CubismMath.sqrt(n * n + o * o),
                    u = e * o / s,
                    l = e * n / s - this._faceVX,
                    h = u - this._faceVY,
                    c = a.CubismMath.sqrt(l * l + h * h);
                  (c < -r || c > r) && (l *= r / c, h *= r / c), this._faceVX += l, this._faceVY += h;
                  var d = .5 * (a.CubismMath.sqrt(r * r + 16 * r * s - 8 * r * s) - r),
                    p = a.CubismMath.sqrt(this._faceVX * this._faceVX + this._faceVY * this._faceVY);
                  p > d && (this._faceVX *= d / p, this._faceVY *= d / p), this._faceX += this._faceVX, this._faceY += this._faceVY
                }
              } else this._lastTimeSeconds = this._userTimeSeconds
            }, t.prototype.getX = function () {
              return this._faceX
            }, t.prototype.getY = function () {
              return this._faceY
            }, t.prototype.set = function (t, e) {
              this._faceTargetX = t, this._faceTargetY = e
            }, t
          }();
        e.CubismTargetPoint = s;
        var u = o(i(704));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismTargetPoint = u.CubismTargetPoint
      },
      788: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismVector2 = void 0;
        var a = function () {
          function t(t, e) {
            this.x = t, this.y = e, this.x = null == t ? 0 : t, this.y = null == e ? 0 : e
          }
          return t.prototype.add = function (e) {
            var i = new t(0, 0);
            return i.x = this.x + e.x, i.y = this.y + e.y, i
          }, t.prototype.substract = function (e) {
            var i = new t(0, 0);
            return i.x = this.x - e.x, i.y = this.y - e.y, i
          }, t.prototype.multiply = function (e) {
            var i = new t(0, 0);
            return i.x = this.x * e.x, i.y = this.y * e.y, i
          }, t.prototype.multiplyByScaler = function (e) {
            return this.multiply(new t(e, e))
          }, t.prototype.division = function (e) {
            var i = new t(0, 0);
            return i.x = this.x / e.x, i.y = this.y / e.y, i
          }, t.prototype.divisionByScalar = function (e) {
            return this.division(new t(e, e))
          }, t.prototype.getLength = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
          }, t.prototype.getDistanceWith = function (t) {
            return Math.sqrt((this.x - t.x) * (this.x - t.x) + (this.y - t.y) * (this.y - t.y))
          }, t.prototype.dot = function (t) {
            return this.x * t.x + this.y * t.y
          }, t.prototype.normalize = function () {
            var t = Math.pow(this.x * this.x + this.y * this.y, .5);
            this.x = this.x / t, this.y = this.y / t
          }, t.prototype.isEqual = function (t) {
            return this.x == t.x && this.y == t.y
          }, t.prototype.isNotEqual = function (t) {
            return !this.isEqual(t)
          }, t
        }();
        e.CubismVector2 = a;
        var s = o(i(788));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismVector2 = s.CubismVector2
      },
      867: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismMoc = void 0;
        var a = i(713),
          s = i(458),
          u = function () {
            function t(t) {
              this._moc = t, this._modelCount = 0
            }
            return t.create = function (e) {
              var i = null,
                r = Live2DCubismCore.Moc.fromArrayBuffer(e);
              return r && (i = new t(r)), i
            }, t.delete = function (t) {
              t._moc._release(), t._moc = null, t = null
            }, t.prototype.createModel = function () {
              var t = null,
                e = Live2DCubismCore.Model.fromMoc(this._moc);
              return e && ((t = new s.CubismModel(e)).initialize(), ++this._modelCount), t
            }, t.prototype.deleteModel = function (t) {
              null != t && (t.release(), t = null, --this._modelCount)
            }, t.prototype.release = function () {
              a.CSM_ASSERT(0 == this._modelCount), this._moc._release(), this._moc = null
            }, t
          }();
        e.CubismMoc = u;
        var l = o(i(867));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismMoc = l.CubismMoc
      },
      458: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismModel = void 0;
        var a = i(348),
          s = i(44),
          u = i(981),
          l = i(177),
          h = i(713),
          c = function () {
            function t(t) {
              this._model = t, this._parameterValues = null, this._parameterMaximumValues = null, this._parameterMinimumValues = null, this._partOpacities = null, this._savedParameters = new l.csmVector, this._parameterIds = new l.csmVector, this._drawableIds = new l.csmVector, this._partIds = new l.csmVector, this._notExistPartId = new u.csmMap, this._notExistParameterId = new u.csmMap, this._notExistParameterValues = new u.csmMap, this._notExistPartOpacities = new u.csmMap
            }
            return t.prototype.update = function () {
              this._model.update(), this._model.drawables.resetDynamicFlags()
            }, t.prototype.getCanvasWidth = function () {
              return null == this._model ? 0 : this._model.canvasinfo.CanvasWidth / this._model.canvasinfo.PixelsPerUnit
            }, t.prototype.getCanvasHeight = function () {
              return null == this._model ? 0 : this._model.canvasinfo.CanvasHeight / this._model.canvasinfo.PixelsPerUnit
            }, t.prototype.saveParameters = function () {
              for (var t = this._model.parameters.count, e = this._savedParameters.getSize(), i = 0; i < t; ++i) i < e ? this._savedParameters.set(i, this._parameterValues[i]) : this._savedParameters.pushBack(this._parameterValues[i])
            }, t.prototype.getModel = function () {
              return this._model
            }, t.prototype.getPartIndex = function (t) {
              var e, i = this._model.parts.count;
              for (e = 0; e < i; ++e)
                if (t == this._partIds.at(e)) return e;
              return this._notExistPartId.isExist(t) ? this._notExistPartId.getValue(t) : (e = i + this._notExistPartId.getSize(), this._notExistPartId.setValue(t, e), this._notExistPartOpacities.appendKey(e), e)
            }, t.prototype.getPartCount = function () {
              return this._model.parts.count
            }, t.prototype.setPartOpacityByIndex = function (t, e) {
              this._notExistPartOpacities.isExist(t) ? this._notExistPartOpacities.setValue(t, e) : (h.CSM_ASSERT(0 <= t && t < this.getPartCount()), this._partOpacities[t] = e)
            }, t.prototype.setPartOpacityById = function (t, e) {
              var i = this.getPartIndex(t);
              i < 0 || this.setPartOpacityByIndex(i, e)
            }, t.prototype.getPartOpacityByIndex = function (t) {
              return this._notExistPartOpacities.isExist(t) ? this._notExistPartOpacities.getValue(t) : (h.CSM_ASSERT(0 <= t && t < this.getPartCount()), this._partOpacities[t])
            }, t.prototype.getPartOpacityById = function (t) {
              var e = this.getPartIndex(t);
              return e < 0 ? 0 : this.getPartOpacityByIndex(e)
            }, t.prototype.getParameterIndex = function (t) {
              var e, i = this._model.parameters.count;
              for (e = 0; e < i; ++e)
                if (t == this._parameterIds.at(e)) return e;
              return this._notExistParameterId.isExist(t) ? this._notExistParameterId.getValue(t) : (e = this._model.parameters.count + this._notExistParameterId.getSize(), this._notExistParameterId.setValue(t, e), this._notExistParameterValues.appendKey(e), e)
            }, t.prototype.getParameterCount = function () {
              return this._model.parameters.count
            }, t.prototype.getParameterMaximumValue = function (t) {
              return this._model.parameters.maximumValues[t]
            }, t.prototype.getParameterMinimumValue = function (t) {
              return this._model.parameters.minimumValues[t]
            }, t.prototype.getParameterDefaultValue = function (t) {
              return this._model.parameters.defaultValues[t]
            }, t.prototype.getParameterValueByIndex = function (t) {
              return this._notExistParameterValues.isExist(t) ? this._notExistParameterValues.getValue(t) : (h.CSM_ASSERT(0 <= t && t < this.getParameterCount()), this._parameterValues[t])
            }, t.prototype.getParameterValueById = function (t) {
              var e = this.getParameterIndex(t);
              return this.getParameterValueByIndex(e)
            }, t.prototype.setParameterValueByIndex = function (t, e, i) {
              void 0 === i && (i = 1), this._notExistParameterValues.isExist(t) ? this._notExistParameterValues.setValue(t, 1 == i ? e : this._notExistParameterValues.getValue(t) * (1 - i) + e * i) : (h.CSM_ASSERT(0 <= t && t < this.getParameterCount()), this._model.parameters.maximumValues[t] < e && (e = this._model.parameters.maximumValues[t]), this._model.parameters.minimumValues[t] > e && (e = this._model.parameters.minimumValues[t]), this._parameterValues[t] = 1 == i ? e : this._parameterValues[t] = this._parameterValues[t] * (1 - i) + e * i)
            }, t.prototype.setParameterValueById = function (t, e, i) {
              void 0 === i && (i = 1);
              var r = this.getParameterIndex(t);
              this.setParameterValueByIndex(r, e, i)
            }, t.prototype.addParameterValueByIndex = function (t, e, i) {
              void 0 === i && (i = 1), this.setParameterValueByIndex(t, this.getParameterValueByIndex(t) + e * i)
            }, t.prototype.addParameterValueById = function (t, e, i) {
              void 0 === i && (i = 1);
              var r = this.getParameterIndex(t);
              this.addParameterValueByIndex(r, e, i)
            }, t.prototype.multiplyParameterValueById = function (t, e, i) {
              void 0 === i && (i = 1);
              var r = this.getParameterIndex(t);
              this.multiplyParameterValueByIndex(r, e, i)
            }, t.prototype.multiplyParameterValueByIndex = function (t, e, i) {
              void 0 === i && (i = 1), this.setParameterValueByIndex(t, this.getParameterValueByIndex(t) * (1 + (e - 1) * i))
            }, t.prototype.getDrawableIndex = function (t) {
              for (var e = this._model.drawables.count, i = 0; i < e; ++i)
                if (this._drawableIds.at(i) == t) return i;
              return -1
            }, t.prototype.getDrawableCount = function () {
              return this._model.drawables.count
            }, t.prototype.getDrawableId = function (t) {
              var e = this._model.drawables.ids;
              return a.CubismFramework.getIdManager().getId(e[t])
            }, t.prototype.getDrawableRenderOrders = function () {
              return this._model.drawables.renderOrders
            }, t.prototype.getDrawableTextureIndices = function (t) {
              return this._model.drawables.textureIndices[t]
            }, t.prototype.getDrawableDynamicFlagVertexPositionsDidChange = function (t) {
              var e = this._model.drawables.dynamicFlags;
              return Live2DCubismCore.Utils.hasVertexPositionsDidChangeBit(e[t])
            }, t.prototype.getDrawableVertexIndexCount = function (t) {
              return this._model.drawables.indexCounts[t]
            }, t.prototype.getDrawableVertexCount = function (t) {
              return this._model.drawables.vertexCounts[t]
            }, t.prototype.getDrawableVertices = function (t) {
              return this.getDrawableVertexPositions(t)
            }, t.prototype.getDrawableVertexIndices = function (t) {
              return this._model.drawables.indices[t]
            }, t.prototype.getDrawableVertexPositions = function (t) {
              return this._model.drawables.vertexPositions[t]
            }, t.prototype.getDrawableVertexUvs = function (t) {
              return this._model.drawables.vertexUvs[t]
            }, t.prototype.getDrawableOpacity = function (t) {
              return this._model.drawables.opacities[t]
            }, t.prototype.getDrawableCulling = function (t) {
              var e = this._model.drawables.constantFlags;
              return !Live2DCubismCore.Utils.hasIsDoubleSidedBit(e[t])
            }, t.prototype.getDrawableBlendMode = function (t) {
              var e = this._model.drawables.constantFlags;
              return Live2DCubismCore.Utils.hasBlendAdditiveBit(e[t]) ? s.CubismBlendMode.CubismBlendMode_Additive : Live2DCubismCore.Utils.hasBlendMultiplicativeBit(e[t]) ? s.CubismBlendMode.CubismBlendMode_Multiplicative : s.CubismBlendMode.CubismBlendMode_Normal
            }, t.prototype.getDrawableInvertedMaskBit = function (t) {
              var e = this._model.drawables.constantFlags;
              return Live2DCubismCore.Utils.hasIsInvertedMaskBit(e[t])
            }, t.prototype.getDrawableMasks = function () {
              return this._model.drawables.masks
            }, t.prototype.getDrawableMaskCounts = function () {
              return this._model.drawables.maskCounts
            }, t.prototype.isUsingMasking = function () {
              for (var t = 0; t < this._model.drawables.count; ++t)
                if (!(this._model.drawables.maskCounts[t] <= 0)) return !0;
              return !1
            }, t.prototype.getDrawableDynamicFlagIsVisible = function (t) {
              var e = this._model.drawables.dynamicFlags;
              return Live2DCubismCore.Utils.hasIsVisibleBit(e[t])
            }, t.prototype.getDrawableDynamicFlagVisibilityDidChange = function (t) {
              var e = this._model.drawables.dynamicFlags;
              return Live2DCubismCore.Utils.hasVisibilityDidChangeBit(e[t])
            }, t.prototype.getDrawableDynamicFlagOpacityDidChange = function (t) {
              var e = this._model.drawables.dynamicFlags;
              return Live2DCubismCore.Utils.hasOpacityDidChangeBit(e[t])
            }, t.prototype.getDrawableDynamicFlagRenderOrderDidChange = function (t) {
              var e = this._model.drawables.dynamicFlags;
              return Live2DCubismCore.Utils.hasRenderOrderDidChangeBit(e[t])
            }, t.prototype.loadParameters = function () {
              var t = this._model.parameters.count,
                e = this._savedParameters.getSize();
              t > e && (t = e);
              for (var i = 0; i < t; ++i) this._parameterValues[i] = this._savedParameters.at(i)
            }, t.prototype.initialize = function () {
              h.CSM_ASSERT(this._model), this._parameterValues = this._model.parameters.values, this._partOpacities = this._model.parts.opacities, this._parameterMaximumValues = this._model.parameters.maximumValues, this._parameterMinimumValues = this._model.parameters.minimumValues;
              var t = this._model.parameters.ids,
                e = this._model.parameters.count;
              this._parameterIds.prepareCapacity(e);
              for (var i = 0; i < e; ++i) this._parameterIds.pushBack(a.CubismFramework.getIdManager().getId(t[i]));
              var r = this._model.parts.ids,
                n = this._model.parts.count;
              for (this._partIds.prepareCapacity(n), i = 0; i < n; ++i) this._partIds.pushBack(a.CubismFramework.getIdManager().getId(r[i]));
              var o = this._model.drawables.ids,
                s = this._model.drawables.count;
              for (this._drawableIds.prepareCapacity(s), i = 0; i < s; ++i) this._drawableIds.pushBack(a.CubismFramework.getIdManager().getId(o[i]))
            }, t.prototype.release = function () {
              this._model.release(), this._model = null
            }, t
          }();
        e.CubismModel = c;
        var d = o(i(458));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismModel = d.CubismModel
      },
      103: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismModelUserData = e.CubismModelUserDataNode = void 0;
        var a = i(348),
          s = i(590),
          u = i(177),
          l = i(292),
          h = function () {};
        e.CubismModelUserDataNode = h;
        var c = function () {
          function t() {
            this._userDataNodes = new u.csmVector, this._artMeshUserDataNode = new u.csmVector
          }
          return t.create = function (e, i) {
            var r = new t;
            return r.parseUserData(e, i), r
          }, t.delete = function (t) {
            null != t && (t.release(), t = null)
          }, t.prototype.getArtMeshUserDatas = function () {
            return this._artMeshUserDataNode
          }, t.prototype.parseUserData = function (t, e) {
            for (var i = new l.CubismModelUserDataJson(t, e), r = a.CubismFramework.getIdManager().getId("ArtMesh"), n = i.getUserDataCount(), o = 0; o < n; o++) {
              var u = new h;
              u.targetId = i.getUserDataId(o), u.targetType = a.CubismFramework.getIdManager().getId(i.getUserDataTargetType(o)), u.value = new s.csmString(i.getUserDataValue(o)), this._userDataNodes.pushBack(u), u.targetType == r && this._artMeshUserDataNode.pushBack(u)
            }
            i.release(), i = void 0
          }, t.prototype.release = function () {
            for (var t = 0; t < this._userDataNodes.getSize(); ++t) this._userDataNodes.set(t, null);
            this._userDataNodes = null
          }, t
        }();
        e.CubismModelUserData = c;
        var d, p = o(i(103));
        (d = e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismModelUserData = p.CubismModelUserData, d.CubismModelUserDataNode = p.CubismModelUserDataNode
      },
      292: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismModelUserDataJson = void 0;
        var a = i(348),
          s = i(127),
          u = "Meta",
          l = "UserData",
          h = function () {
            function t(t, e) {
              this._json = s.CubismJson.create(t, e)
            }
            return t.prototype.release = function () {
              s.CubismJson.delete(this._json)
            }, t.prototype.getUserDataCount = function () {
              return this._json.getRoot().getValueByString(u).getValueByString("UserDataCount").toInt()
            }, t.prototype.getTotalUserDataSize = function () {
              return this._json.getRoot().getValueByString(u).getValueByString("TotalUserDataSize").toInt()
            }, t.prototype.getUserDataTargetType = function (t) {
              return this._json.getRoot().getValueByString(l).getValueByIndex(t).getValueByString("Target").getRawString()
            }, t.prototype.getUserDataId = function (t) {
              return a.CubismFramework.getIdManager().getId(this._json.getRoot().getValueByString(l).getValueByIndex(t).getValueByString("Id").getRawString())
            }, t.prototype.getUserDataValue = function (t) {
              return this._json.getRoot().getValueByString(l).getValueByIndex(t).getValueByString("Value").getRawString()
            }, t
          }();
        e.CubismModelUserDataJson = h;
        var c = o(i(292));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismModelUserDataJson = c.CubismModelUserDataJson
      },
      188: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismUserModel = void 0;
        var a = i(552),
          s = i(483),
          u = i(452),
          l = i(348),
          h = i(7),
          c = i(704),
          d = i(930),
          p = i(47),
          m = i(805),
          g = i(175),
          f = i(827),
          _ = i(713),
          y = i(867),
          b = i(103),
          v = function () {
            function t() {
              this.loadMotion = function (t, e, i, r) {
                return p.CubismMotion.create(t, e, r)
              }, this._moc = null, this._model = null, this._motionManager = null, this._expressionManager = null, this._eyeBlink = null, this._breath = null, this._modelMatrix = null, this._pose = null, this._dragManager = null, this._physics = null, this._modelUserData = null, this._initialized = !1, this._updating = !1, this._opacity = 1, this._lipsync = !0, this._lastLipSyncValue = 0, this._dragX = 0, this._dragY = 0, this._accelerationX = 0, this._accelerationY = 0, this._accelerationZ = 0, this._debugMode = !1, this._renderer = null, this._motionManager = new m.CubismMotionManager, this._motionManager.setEventCallback(t.cubismDefaultMotionEventCallback, this), this._expressionManager = new m.CubismMotionManager, this._dragManager = new c.CubismTargetPoint
            }
            return t.prototype.isInitialized = function () {
              return this._initialized
            }, t.prototype.setInitialized = function (t) {
              this._initialized = t
            }, t.prototype.isUpdating = function () {
              return this._updating
            }, t.prototype.setUpdating = function (t) {
              this._updating = t
            }, t.prototype.setDragging = function (t, e) {
              this._dragManager.set(t, e)
            }, t.prototype.setAcceleration = function (t, e, i) {
              this._accelerationX = t, this._accelerationY = e, this._accelerationZ = i
            }, t.prototype.getModelMatrix = function () {
              return this._modelMatrix
            }, t.prototype.setOpacity = function (t) {
              this._opacity = t
            }, t.prototype.getOpacity = function () {
              return this._opacity
            }, t.prototype.loadModel = function (t) {
              this._moc = y.CubismMoc.create(t), this._model = this._moc.createModel(), this._model.saveParameters(), null != this._moc && null != this._model ? this._modelMatrix = new h.CubismModelMatrix(this._model.getCanvasWidth(), this._model.getCanvasHeight()) : _.CubismLogError("Failed to CreateModel().")
            }, t.prototype.loadExpression = function (t, e, i) {
              return d.CubismExpressionMotion.create(t, e)
            }, t.prototype.loadPose = function (t, e) {
              this._pose = u.CubismPose.create(t, e)
            }, t.prototype.loadUserData = function (t, e) {
              this._modelUserData = b.CubismModelUserData.create(t, e)
            }, t.prototype.loadPhysics = function (t, e) {
              this._physics = g.CubismPhysics.create(t, e)
            }, t.prototype.isHit = function (t, e, i) {
              var r = this._model.getDrawableIndex(t);
              if (r < 0) return !1;
              for (var n = this._model.getDrawableVertexCount(r), o = this._model.getDrawableVertices(r), a = o[0], s = o[0], u = o[1], h = o[1], c = 1; c < n; ++c) {
                var d = o[l.Constant.vertexOffset + c * l.Constant.vertexStep],
                  p = o[l.Constant.vertexOffset + c * l.Constant.vertexStep + 1];
                d < a && (a = d), d > s && (s = d), p < u && (u = p), p > h && (h = p)
              }
              var m = this._modelMatrix.invertTransformX(e),
                g = this._modelMatrix.invertTransformY(i);
              return a <= m && m <= s && u <= g && g <= h
            }, t.prototype.getModel = function () {
              return this._model
            }, t.prototype.getRenderer = function () {
              return this._renderer
            }, t.prototype.createRenderer = function () {
              this._renderer && this.deleteRenderer(), this._renderer = new f.CubismRenderer_WebGL, this._renderer.initialize(this._model)
            }, t.prototype.deleteRenderer = function () {
              null != this._renderer && (this._renderer.release(), this._renderer = null)
            }, t.prototype.motionEventFired = function (t) {
              _.CubismLogInfo("{0}", t.s)
            }, t.cubismDefaultMotionEventCallback = function (t, e, i) {
              null != i && i.motionEventFired(e)
            }, t.prototype.release = function () {
              null != this._motionManager && (this._motionManager.release(), this._motionManager = null), null != this._expressionManager && (this._expressionManager.release(), this._expressionManager = null), null != this._moc && (this._moc.deleteModel(this._model), this._moc.release(), this._moc = null), this._modelMatrix = null, u.CubismPose.delete(this._pose), s.CubismEyeBlink.delete(this._eyeBlink), a.CubismBreath.delete(this._breath), this._dragManager = null, g.CubismPhysics.delete(this._physics), b.CubismModelUserData.delete(this._modelUserData), this.deleteRenderer()
            }, t
          }();
        e.CubismUserModel = v;
        var C = o(i(188));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismUserModel = C.CubismUserModel
      },
      938: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.ACubismMotion = void 0;
        var a = i(736),
          s = i(177),
          u = i(713),
          l = function () {
            function t() {
              var t = this;
              this.setFinishedMotionHandler = function (e) {
                return t._onFinishedMotion = e
              }, this.getFinishedMotionHandler = function () {
                return t._onFinishedMotion
              }, this._fadeInSeconds = -1, this._fadeOutSeconds = -1, this._weight = 1, this._offsetSeconds = 0, this._firedEventValues = new s.csmVector
            }
            return t.delete = function (t) {
              t.release(), t = void 0, t = null
            }, t.prototype.release = function () {
              this._weight = 0
            }, t.prototype.updateParameters = function (t, e, i) {
              if (e.isAvailable() && !e.isFinished()) {
                if (!e.isStarted()) {
                  e.setIsStarted(!0), e.setStartTime(i - this._offsetSeconds), e.setFadeInStartTime(i);
                  var r = this.getDuration();
                  e.getEndTime() < 0 && e.setEndTime(r <= 0 ? -1 : e.getStartTime() + r)
                }
                var n = this._weight;
                n = n * (0 == this._fadeInSeconds ? 1 : a.CubismMath.getEasingSine((i - e.getFadeInStartTime()) / this._fadeInSeconds)) * (0 == this._fadeOutSeconds || e.getEndTime() < 0 ? 1 : a.CubismMath.getEasingSine((e.getEndTime() - i) / this._fadeOutSeconds)), e.setState(i, n), u.CSM_ASSERT(0 <= n && n <= 1), this.doUpdateParameters(t, i, n, e), e.getEndTime() > 0 && e.getEndTime() < i && e.setIsFinished(!0)
              }
            }, t.prototype.setFadeInTime = function (t) {
              this._fadeInSeconds = t
            }, t.prototype.setFadeOutTime = function (t) {
              this._fadeOutSeconds = t
            }, t.prototype.getFadeOutTime = function () {
              return this._fadeOutSeconds
            }, t.prototype.getFadeInTime = function () {
              return this._fadeInSeconds
            }, t.prototype.setWeight = function (t) {
              this._weight = t
            }, t.prototype.getWeight = function () {
              return this._weight
            }, t.prototype.getDuration = function () {
              return -1
            }, t.prototype.getLoopDuration = function () {
              return -1
            }, t.prototype.setOffsetTime = function (t) {
              this._offsetSeconds = t
            }, t.prototype.getFiredEvent = function (t, e) {
              return this._firedEventValues
            }, t
          }();
        e.ACubismMotion = l;
        var h = o(i(938));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).ACubismMotion = h.ACubismMotion
      },
      930: function (t, e, i) {
        var r, n = this && this.__extends || (r = function (t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function (t, e) {
                t.__proto__ = e
              } || function (t, e) {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
              })(t, e)
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function i() {
              this.constructor = t
            }
            r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
          }),
          o = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          a = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          s = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && o(e, t, i);
            return a(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.ExpressionParameter = e.ExpressionBlendType = e.CubismExpressionMotion = void 0;
        var u, l = i(348),
          h = i(177),
          c = i(127),
          d = i(938),
          p = "Parameters",
          m = "Blend",
          g = function (t) {
            function e() {
              var e = t.call(this) || this;
              return e._parameters = new h.csmVector, e
            }
            return n(e, t), e.create = function (t, i) {
              var r = new e,
                n = c.CubismJson.create(t, i),
                o = n.getRoot();
              r.setFadeInTime(o.getValueByString("FadeInTime").toFloat(1)), r.setFadeOutTime(o.getValueByString("FadeOutTime").toFloat(1));
              var a = o.getValueByString(p).getSize();
              r._parameters.prepareCapacity(a);
              for (var s = 0; s < a; ++s) {
                var h, d = o.getValueByString(p).getValueByIndex(s),
                  g = l.CubismFramework.getIdManager().getId(d.getValueByString("Id").getRawString()),
                  _ = d.getValueByString("Value").toFloat();
                h = d.getValueByString(m).isNull() || "Add" == d.getValueByString(m).getString() ? u.ExpressionBlendType_Add : "Multiply" == d.getValueByString(m).getString() ? u.ExpressionBlendType_Multiply : "Overwrite" == d.getValueByString(m).getString() ? u.ExpressionBlendType_Overwrite : u.ExpressionBlendType_Add;
                var y = new f;
                y.parameterId = g, y.blendType = h, y.value = _, r._parameters.pushBack(y)
              }
              return c.CubismJson.delete(n), r
            }, e.prototype.doUpdateParameters = function (t, e, i, r) {
              for (var n = 0; n < this._parameters.getSize(); ++n) {
                var o = this._parameters.at(n);
                switch (o.blendType) {
                  case u.ExpressionBlendType_Add:
                    t.addParameterValueById(o.parameterId, o.value, i);
                    break;
                  case u.ExpressionBlendType_Multiply:
                    t.multiplyParameterValueById(o.parameterId, o.value, i);
                    break;
                  case u.ExpressionBlendType_Overwrite:
                    t.setParameterValueById(o.parameterId, o.value, i)
                }
              }
            }, e
          }(d.ACubismMotion);
        e.CubismExpressionMotion = g,
          function (t) {
            t[t.ExpressionBlendType_Add = 0] = "ExpressionBlendType_Add", t[t.ExpressionBlendType_Multiply = 1] = "ExpressionBlendType_Multiply", t[t.ExpressionBlendType_Overwrite = 2] = "ExpressionBlendType_Overwrite"
          }(u = e.ExpressionBlendType || (e.ExpressionBlendType = {}));
        var f = function () {};
        e.ExpressionParameter = f;
        var _, y = s(i(930));
        (_ = e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismExpressionMotion = y.CubismExpressionMotion, _.ExpressionBlendType = y.ExpressionBlendType, _.ExpressionParameter = y.ExpressionParameter
      },
      47: function (t, e, i) {
        var r, n = this && this.__extends || (r = function (t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function (t, e) {
                t.__proto__ = e
              } || function (t, e) {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
              })(t, e)
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function i() {
              this.constructor = t
            }
            r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
          }),
          o = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          a = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          s = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && o(e, t, i);
            return a(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismMotion = void 0;
        var u = i(348),
          l = i(736),
          h = i(590),
          c = i(713),
          d = i(938),
          p = i(496),
          m = i(683);

        function g(t, e, i) {
          var r = new p.CubismMotionPoint;
          return r.time = t.time + (e.time - t.time) * i, r.value = t.value + (e.value - t.value) * i, r
        }

        function f(t, e) {
          var i = (e - t[0].time) / (t[1].time - t[0].time);
          return i < 0 && (i = 0), t[0].value + (t[1].value - t[0].value) * i
        }

        function _(t, e) {
          var i = (e - t[0].time) / (t[3].time - t[0].time);
          i < 0 && (i = 0);
          var r = g(t[0], t[1], i),
            n = g(t[1], t[2], i),
            o = g(t[2], t[3], i),
            a = g(r, n, i),
            s = g(n, o, i);
          return g(a, s, i).value
        }

        function y(t, e) {
          return t[0].value
        }

        function b(t, e) {
          return t[1].value
        }

        function v(t, e, i) {
          for (var r = t.curves.at(e), n = -1, o = r.baseSegmentIndex + r.segmentCount, a = 0, s = r.baseSegmentIndex; s < o; ++s)
            if (a = t.segments.at(s).basePointIndex + (t.segments.at(s).segmentType == p.CubismMotionSegmentType.CubismMotionSegmentType_Bezier ? 3 : 1), t.points.at(a).time > i) {
              n = s;
              break
            } if (-1 == n) return t.points.at(a).value;
          var u = t.segments.at(n);
          return u.evaluate(t.points.get(u.basePointIndex), i)
        }
        var C = function (t) {
          function e() {
            var e = t.call(this) || this;
            return e._sourceFrameRate = 30, e._loopDurationSeconds = -1, e._isLoop = !1, e._isLoopFadeIn = !0, e._lastWeight = 0, e._motionData = null, e._modelCurveIdEyeBlink = null, e._modelCurveIdLipSync = null, e._eyeBlinkParameterIds = null, e._lipSyncParameterIds = null, e
          }
          return n(e, t), e.create = function (t, i, r) {
            var n = new e;
            return n.parse(t, i), n._sourceFrameRate = n._motionData.fps, n._loopDurationSeconds = n._motionData.duration, n._onFinishedMotion = r, n
          }, e.prototype.doUpdateParameters = function (t, e, i, r) {
            null == this._modelCurveIdEyeBlink && (this._modelCurveIdEyeBlink = u.CubismFramework.getIdManager().getId("EyeBlink")), null == this._modelCurveIdLipSync && (this._modelCurveIdLipSync = u.CubismFramework.getIdManager().getId("LipSync"));
            var n = e - r.getStartTime();
            n < 0 && (n = 0);
            var o = Number.MAX_VALUE,
              a = Number.MAX_VALUE,
              s = 64,
              h = 0,
              d = 0;
            this._eyeBlinkParameterIds.getSize() > s && c.CubismLogDebug("too many eye blink targets : {0}", this._eyeBlinkParameterIds.getSize()), this._lipSyncParameterIds.getSize() > s && c.CubismLogDebug("too many lip sync targets : {0}", this._lipSyncParameterIds.getSize());
            var m, g, f, _ = this._fadeInSeconds <= 0 ? 1 : l.CubismMath.getEasingSine((e - r.getFadeInStartTime()) / this._fadeInSeconds),
              y = this._fadeOutSeconds <= 0 || r.getEndTime() < 0 ? 1 : l.CubismMath.getEasingSine((r.getEndTime() - e) / this._fadeOutSeconds),
              b = n;
            if (this._isLoop)
              for (; b > this._motionData.duration;) b -= this._motionData.duration;
            var C = this._motionData.curves;
            for (g = 0; g < this._motionData.curveCount && C.at(g).type == p.CubismMotionCurveTarget.CubismMotionCurveTarget_Model; ++g) m = v(this._motionData, g, b), C.at(g).id == this._modelCurveIdEyeBlink ? a = m : C.at(g).id == this._modelCurveIdLipSync && (o = m);
            for (; g < this._motionData.curveCount && C.at(g).type == p.CubismMotionCurveTarget.CubismMotionCurveTarget_Parameter; ++g)
              if (-1 != (f = t.getParameterIndex(C.at(g).id))) {
                var S = t.getParameterValueByIndex(f);
                if (m = v(this._motionData, g, b), a != Number.MAX_VALUE)
                  for (var P = 0; P < this._eyeBlinkParameterIds.getSize() && P < s; ++P)
                    if (this._eyeBlinkParameterIds.at(P) == C.at(g).id) {
                      m *= a, d |= 1 << P;
                      break
                    } if (o != Number.MAX_VALUE)
                  for (P = 0; P < this._lipSyncParameterIds.getSize() && P < s; ++P)
                    if (this._lipSyncParameterIds.at(P) == C.at(g).id) {
                      m += o, h |= 1 << P;
                      break
                    } var M = void 0;
                if (C.at(g).fadeInTime < 0 && C.at(g).fadeOutTime < 0) M = S + (m - S) * i;
                else {
                  var x, B;
                  x = C.at(g).fadeInTime < 0 ? _ : 0 == C.at(g).fadeInTime ? 1 : l.CubismMath.getEasingSine((e - r.getFadeInStartTime()) / C.at(g).fadeInTime), B = C.at(g).fadeOutTime < 0 ? y : 0 == C.at(g).fadeOutTime || r.getEndTime() < 0 ? 1 : l.CubismMath.getEasingSine((r.getEndTime() - e) / C.at(g).fadeOutTime), M = S + (m - S) * (this._weight * x * B)
                }
                t.setParameterValueByIndex(f, M, 1)
              } if (a != Number.MAX_VALUE)
              for (P = 0; P < this._eyeBlinkParameterIds.getSize() && P < s; ++P) S = t.getParameterValueById(this._eyeBlinkParameterIds.at(P)), d >> P & 1 || (M = S + (a - S) * i, t.setParameterValueById(this._eyeBlinkParameterIds.at(P), M));
            if (o != Number.MAX_VALUE)
              for (P = 0; P < this._lipSyncParameterIds.getSize() && P < s; ++P) S = t.getParameterValueById(this._lipSyncParameterIds.at(P)), h >> P & 1 || (M = S + (o - S) * i, t.setParameterValueById(this._lipSyncParameterIds.at(P), M));
            for (; g < this._motionData.curveCount && C.at(g).type == p.CubismMotionCurveTarget.CubismMotionCurveTarget_PartOpacity; ++g) - 1 != (f = t.getParameterIndex(C.at(g).id)) && (m = v(this._motionData, g, b), t.setParameterValueByIndex(f, m));
            n >= this._motionData.duration && (this._isLoop ? (r.setStartTime(e), this._isLoopFadeIn && r.setFadeInStartTime(e)) : (this._onFinishedMotion && this._onFinishedMotion(this), r.setIsFinished(!0))), this._lastWeight = i
          }, e.prototype.setIsLoop = function (t) {
            this._isLoop = t
          }, e.prototype.isLoop = function () {
            return this._isLoop
          }, e.prototype.setIsLoopFadeIn = function (t) {
            this._isLoopFadeIn = t
          }, e.prototype.isLoopFadeIn = function () {
            return this._isLoopFadeIn
          }, e.prototype.getDuration = function () {
            return this._isLoop ? -1 : this._loopDurationSeconds
          }, e.prototype.getLoopDuration = function () {
            return this._loopDurationSeconds
          }, e.prototype.setParameterFadeInTime = function (t, e) {
            for (var i = this._motionData.curves, r = 0; r < this._motionData.curveCount; ++r)
              if (t == i.at(r).id) return void(i.at(r).fadeInTime = e)
          }, e.prototype.setParameterFadeOutTime = function (t, e) {
            for (var i = this._motionData.curves, r = 0; r < this._motionData.curveCount; ++r)
              if (t == i.at(r).id) return void(i.at(r).fadeOutTime = e)
          }, e.prototype.getParameterFadeInTime = function (t) {
            for (var e = this._motionData.curves, i = 0; i < this._motionData.curveCount; ++i)
              if (t == e.at(i).id) return e.at(i).fadeInTime;
            return -1
          }, e.prototype.getParameterFadeOutTime = function (t) {
            for (var e = this._motionData.curves, i = 0; i < this._motionData.curveCount; ++i)
              if (t == e.at(i).id) return e.at(i).fadeOutTime;
            return -1
          }, e.prototype.setEffectIds = function (t, e) {
            this._eyeBlinkParameterIds = t, this._lipSyncParameterIds = e
          }, e.prototype.release = function () {
            this._motionData = void 0, this._motionData = null
          }, e.prototype.parse = function (t, e) {
            this._motionData = new p.CubismMotionData;
            var i = new m.CubismMotionJson(t, e);
            this._motionData.duration = i.getMotionDuration(), this._motionData.loop = i.isMotionLoop(), this._motionData.curveCount = i.getMotionCurveCount(), this._motionData.fps = i.getMotionFps(), this._motionData.eventCount = i.getEventCount(), i.isExistMotionFadeInTime() ? this._fadeInSeconds = i.getMotionFadeInTime() < 0 ? 1 : i.getMotionFadeInTime() : this._fadeInSeconds = 1, i.isExistMotionFadeOutTime() ? this._fadeOutSeconds = i.getMotionFadeOutTime() < 0 ? 1 : i.getMotionFadeOutTime() : this._fadeOutSeconds = 1, this._motionData.curves.updateSize(this._motionData.curveCount, p.CubismMotionCurve, !0), this._motionData.segments.updateSize(i.getMotionTotalSegmentCount(), p.CubismMotionSegment, !0), this._motionData.points.updateSize(i.getMotionTotalPointCount(), p.CubismMotionPoint, !0), this._motionData.events.updateSize(this._motionData.eventCount, p.CubismMotionEvent, !0);
            for (var r = 0, n = 0, o = 0; o < this._motionData.curveCount; ++o) {
              "Model" == i.getMotionCurveTarget(o) ? this._motionData.curves.at(o).type = p.CubismMotionCurveTarget.CubismMotionCurveTarget_Model : "Parameter" == i.getMotionCurveTarget(o) ? this._motionData.curves.at(o).type = p.CubismMotionCurveTarget.CubismMotionCurveTarget_Parameter : "PartOpacity" == i.getMotionCurveTarget(o) && (this._motionData.curves.at(o).type = p.CubismMotionCurveTarget.CubismMotionCurveTarget_PartOpacity), this._motionData.curves.at(o).id = i.getMotionCurveId(o), this._motionData.curves.at(o).baseSegmentIndex = n, this._motionData.curves.at(o).fadeInTime = i.isExistMotionCurveFadeInTime(o) ? i.getMotionCurveFadeInTime(o) : -1, this._motionData.curves.at(o).fadeOutTime = i.isExistMotionCurveFadeOutTime(o) ? i.getMotionCurveFadeOutTime(o) : -1;
              for (var a = 0; a < i.getMotionCurveSegmentCount(o);) {
                switch (0 == a ? (this._motionData.segments.at(n).basePointIndex = r, this._motionData.points.at(r).time = i.getMotionCurveSegment(o, a), this._motionData.points.at(r).value = i.getMotionCurveSegment(o, a + 1), r += 1, a += 2) : this._motionData.segments.at(n).basePointIndex = r - 1, i.getMotionCurveSegment(o, a)) {
                  case p.CubismMotionSegmentType.CubismMotionSegmentType_Linear:
                    this._motionData.segments.at(n).segmentType = p.CubismMotionSegmentType.CubismMotionSegmentType_Linear, this._motionData.segments.at(n).evaluate = f, this._motionData.points.at(r).time = i.getMotionCurveSegment(o, a + 1), this._motionData.points.at(r).value = i.getMotionCurveSegment(o, a + 2), r += 1, a += 3;
                    break;
                  case p.CubismMotionSegmentType.CubismMotionSegmentType_Bezier:
                    this._motionData.segments.at(n).segmentType = p.CubismMotionSegmentType.CubismMotionSegmentType_Bezier, this._motionData.segments.at(n).evaluate = _, this._motionData.points.at(r).time = i.getMotionCurveSegment(o, a + 1), this._motionData.points.at(r).value = i.getMotionCurveSegment(o, a + 2), this._motionData.points.at(r + 1).time = i.getMotionCurveSegment(o, a + 3), this._motionData.points.at(r + 1).value = i.getMotionCurveSegment(o, a + 4), this._motionData.points.at(r + 2).time = i.getMotionCurveSegment(o, a + 5), this._motionData.points.at(r + 2).value = i.getMotionCurveSegment(o, a + 6), r += 3, a += 7;
                    break;
                  case p.CubismMotionSegmentType.CubismMotionSegmentType_Stepped:
                    this._motionData.segments.at(n).segmentType = p.CubismMotionSegmentType.CubismMotionSegmentType_Stepped, this._motionData.segments.at(n).evaluate = y, this._motionData.points.at(r).time = i.getMotionCurveSegment(o, a + 1), this._motionData.points.at(r).value = i.getMotionCurveSegment(o, a + 2), r += 1, a += 3;
                    break;
                  case p.CubismMotionSegmentType.CubismMotionSegmentType_InverseStepped:
                    this._motionData.segments.at(n).segmentType = p.CubismMotionSegmentType.CubismMotionSegmentType_InverseStepped, this._motionData.segments.at(n).evaluate = b, this._motionData.points.at(r).time = i.getMotionCurveSegment(o, a + 1), this._motionData.points.at(r).value = i.getMotionCurveSegment(o, a + 2), r += 1, a += 3;
                    break;
                  default:
                    c.CSM_ASSERT(0)
                }++this._motionData.curves.at(o).segmentCount, ++n
              }
            }
            for (var s = 0; s < i.getEventCount(); ++s) this._motionData.events.at(s).fireTime = i.getEventTime(s), this._motionData.events.at(s).value = i.getEventValue(s);
            i.release(), i = void 0, i = null
          }, e.prototype.getFiredEvent = function (t, e) {
            this._firedEventValues.updateSize(0);
            for (var i = 0; i < this._motionData.eventCount; ++i) this._motionData.events.at(i).fireTime > t && this._motionData.events.at(i).fireTime <= e && this._firedEventValues.pushBack(new h.csmString(this._motionData.events.at(i).value.s));
            return this._firedEventValues
          }, e
        }(d.ACubismMotion);
        e.CubismMotion = C;
        var S = s(i(47));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismMotion = S.CubismMotion
      },
      496: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismMotionData = e.CubismMotionEvent = e.CubismMotionCurve = e.CubismMotionSegment = e.CubismMotionPoint = e.CubismMotionSegmentType = e.CubismMotionCurveTarget = void 0;
        var a, s, u = i(177);
        ! function (t) {
          t[t.CubismMotionCurveTarget_Model = 0] = "CubismMotionCurveTarget_Model", t[t.CubismMotionCurveTarget_Parameter = 1] = "CubismMotionCurveTarget_Parameter", t[t.CubismMotionCurveTarget_PartOpacity = 2] = "CubismMotionCurveTarget_PartOpacity"
        }(a = e.CubismMotionCurveTarget || (e.CubismMotionCurveTarget = {})), (s = e.CubismMotionSegmentType || (e.CubismMotionSegmentType = {}))[s.CubismMotionSegmentType_Linear = 0] = "CubismMotionSegmentType_Linear", s[s.CubismMotionSegmentType_Bezier = 1] = "CubismMotionSegmentType_Bezier", s[s.CubismMotionSegmentType_Stepped = 2] = "CubismMotionSegmentType_Stepped", s[s.CubismMotionSegmentType_InverseStepped = 3] = "CubismMotionSegmentType_InverseStepped";
        e.CubismMotionPoint = function () {
          this.time = 0, this.value = 0
        };
        e.CubismMotionSegment = function () {
          this.evaluate = null, this.basePointIndex = 0, this.segmentType = 0
        };
        e.CubismMotionCurve = function () {
          this.type = a.CubismMotionCurveTarget_Model, this.segmentCount = 0, this.baseSegmentIndex = 0, this.fadeInTime = 0, this.fadeOutTime = 0
        };
        e.CubismMotionEvent = function () {
          this.fireTime = 0
        };
        e.CubismMotionData = function () {
          this.duration = 0, this.loop = !1, this.curveCount = 0, this.eventCount = 0, this.fps = 0, this.curves = new u.csmVector, this.segments = new u.csmVector, this.points = new u.csmVector, this.events = new u.csmVector
        };
        var l, h = o(i(496));
        (l = e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismMotionCurve = h.CubismMotionCurve, l.CubismMotionCurveTarget = h.CubismMotionCurveTarget, l.CubismMotionData = h.CubismMotionData, l.CubismMotionEvent = h.CubismMotionEvent, l.CubismMotionPoint = h.CubismMotionPoint, l.CubismMotionSegment = h.CubismMotionSegment, l.CubismMotionSegmentType = h.CubismMotionSegmentType
      },
      683: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismMotionJson = void 0;
        var a = i(348),
          s = i(590),
          u = i(127),
          l = "Meta",
          h = "Curves",
          c = "FadeInTime",
          d = "FadeOutTime",
          p = "Segments",
          m = "UserData",
          g = function () {
            function t(t, e) {
              this._json = u.CubismJson.create(t, e)
            }
            return t.prototype.release = function () {
              u.CubismJson.delete(this._json)
            }, t.prototype.getMotionDuration = function () {
              return this._json.getRoot().getValueByString(l).getValueByString("Duration").toFloat()
            }, t.prototype.isMotionLoop = function () {
              return this._json.getRoot().getValueByString(l).getValueByString("Loop").toBoolean()
            }, t.prototype.getMotionCurveCount = function () {
              return this._json.getRoot().getValueByString(l).getValueByString("CurveCount").toInt()
            }, t.prototype.getMotionFps = function () {
              return this._json.getRoot().getValueByString(l).getValueByString("Fps").toFloat()
            }, t.prototype.getMotionTotalSegmentCount = function () {
              return this._json.getRoot().getValueByString(l).getValueByString("TotalSegmentCount").toInt()
            }, t.prototype.getMotionTotalPointCount = function () {
              return this._json.getRoot().getValueByString(l).getValueByString("TotalPointCount").toInt()
            }, t.prototype.isExistMotionFadeInTime = function () {
              return !this._json.getRoot().getValueByString(l).getValueByString(c).isNull()
            }, t.prototype.isExistMotionFadeOutTime = function () {
              return !this._json.getRoot().getValueByString(l).getValueByString(d).isNull()
            }, t.prototype.getMotionFadeInTime = function () {
              return this._json.getRoot().getValueByString(l).getValueByString(c).toFloat()
            }, t.prototype.getMotionFadeOutTime = function () {
              return this._json.getRoot().getValueByString(l).getValueByString(d).toFloat()
            }, t.prototype.getMotionCurveTarget = function (t) {
              return this._json.getRoot().getValueByString(h).getValueByIndex(t).getValueByString("Target").getRawString()
            }, t.prototype.getMotionCurveId = function (t) {
              return a.CubismFramework.getIdManager().getId(this._json.getRoot().getValueByString(h).getValueByIndex(t).getValueByString("Id").getRawString())
            }, t.prototype.isExistMotionCurveFadeInTime = function (t) {
              return !this._json.getRoot().getValueByString(h).getValueByIndex(t).getValueByString(c).isNull()
            }, t.prototype.isExistMotionCurveFadeOutTime = function (t) {
              return !this._json.getRoot().getValueByString(h).getValueByIndex(t).getValueByString(d).isNull()
            }, t.prototype.getMotionCurveFadeInTime = function (t) {
              return this._json.getRoot().getValueByString(h).getValueByIndex(t).getValueByString(c).toFloat()
            }, t.prototype.getMotionCurveFadeOutTime = function (t) {
              return this._json.getRoot().getValueByString(h).getValueByIndex(t).getValueByString(d).toFloat()
            }, t.prototype.getMotionCurveSegmentCount = function (t) {
              return this._json.getRoot().getValueByString(h).getValueByIndex(t).getValueByString(p).getVector().getSize()
            }, t.prototype.getMotionCurveSegment = function (t, e) {
              return this._json.getRoot().getValueByString(h).getValueByIndex(t).getValueByString(p).getValueByIndex(e).toFloat()
            }, t.prototype.getEventCount = function () {
              return this._json.getRoot().getValueByString(l).getValueByString("UserDataCount").toInt()
            }, t.prototype.getTotalEventValueSize = function () {
              return this._json.getRoot().getValueByString(l).getValueByString("TotalUserDataSize").toInt()
            }, t.prototype.getEventTime = function (t) {
              return this._json.getRoot().getValueByString(m).getValueByIndex(t).getValueByString("Time").toInt()
            }, t.prototype.getEventValue = function (t) {
              return new s.csmString(this._json.getRoot().getValueByString(m).getValueByIndex(t).getValueByString("Value").getRawString())
            }, t
          }();
        e.CubismMotionJson = g;
        var f = o(i(683));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismMotionJson = f.CubismMotionJson
      },
      805: function (t, e, i) {
        var r, n = this && this.__extends || (r = function (t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function (t, e) {
                t.__proto__ = e
              } || function (t, e) {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
              })(t, e)
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function i() {
              this.constructor = t
            }
            r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
          }),
          o = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          a = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          s = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && o(e, t, i);
            return a(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismMotionManager = void 0;
        var u = function (t) {
          function e() {
            var e = t.call(this) || this;
            return e._currentPriority = 0, e._reservePriority = 0, e
          }
          return n(e, t), e.prototype.getCurrentPriority = function () {
            return this._currentPriority
          }, e.prototype.getReservePriority = function () {
            return this._reservePriority
          }, e.prototype.setReservePriority = function (t) {
            this._reservePriority = t
          }, e.prototype.startMotionPriority = function (e, i, r) {
            return r == this._reservePriority && (this._reservePriority = 0), this._currentPriority = r, t.prototype.startMotion.call(this, e, i, this._userTimeSeconds)
          }, e.prototype.updateMotion = function (e, i) {
            this._userTimeSeconds += i;
            var r = t.prototype.doUpdateMotion.call(this, e, this._userTimeSeconds);
            return this.isFinished() && (this._currentPriority = 0), r
          }, e.prototype.reserveMotion = function (t) {
            return !(t <= this._reservePriority || t <= this._currentPriority || (this._reservePriority = t, 0))
          }, e
        }(i(514).CubismMotionQueueManager);
        e.CubismMotionManager = u;
        var l = s(i(805));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismMotionManager = l.CubismMotionManager
      },
      57: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismMotionQueueEntry = void 0;
        var a = i(938),
          s = function () {
            function t() {
              this._autoDelete = !1, this._motion = null, this._available = !0, this._finished = !1, this._started = !1, this._startTimeSeconds = -1, this._fadeInStartTimeSeconds = 0, this._endTimeSeconds = -1, this._stateTimeSeconds = 0, this._stateWeight = 0, this._lastEventCheckSeconds = 0, this._motionQueueEntryHandle = this, this._fadeOutSeconds = 0, this._isTriggeredFadeOut = !1
            }
            return t.prototype.release = function () {
              this._autoDelete && this._motion && a.ACubismMotion.delete(this._motion)
            }, t.prototype.setFadeOut = function (t) {
              this._fadeOutSeconds = t, this._isTriggeredFadeOut = !0
            }, t.prototype.startFadeOut = function (t, e) {
              var i = e + t;
              this._isTriggeredFadeOut = !0, (this._endTimeSeconds < 0 || i < this._endTimeSeconds) && (this._endTimeSeconds = i)
            }, t.prototype.isFinished = function () {
              return this._finished
            }, t.prototype.isStarted = function () {
              return this._started
            }, t.prototype.getStartTime = function () {
              return this._startTimeSeconds
            }, t.prototype.getFadeInStartTime = function () {
              return this._fadeInStartTimeSeconds
            }, t.prototype.getEndTime = function () {
              return this._endTimeSeconds
            }, t.prototype.setStartTime = function (t) {
              this._startTimeSeconds = t
            }, t.prototype.setFadeInStartTime = function (t) {
              this._fadeInStartTimeSeconds = t
            }, t.prototype.setEndTime = function (t) {
              this._endTimeSeconds = t
            }, t.prototype.setIsFinished = function (t) {
              this._finished = t
            }, t.prototype.setIsStarted = function (t) {
              this._started = t
            }, t.prototype.isAvailable = function () {
              return this._available
            }, t.prototype.setIsAvailable = function (t) {
              this._available = t
            }, t.prototype.setState = function (t, e) {
              this._stateTimeSeconds = t, this._stateWeight = e
            }, t.prototype.getStateTime = function () {
              return this._stateTimeSeconds
            }, t.prototype.getStateWeight = function () {
              return this._stateWeight
            }, t.prototype.getLastCheckEventSeconds = function () {
              return this._lastEventCheckSeconds
            }, t.prototype.setLastCheckEventSeconds = function (t) {
              this._lastEventCheckSeconds = t
            }, t.prototype.isTriggeredFadeOut = function () {
              return this._isTriggeredFadeOut && this._endTimeSeconds < 0
            }, t.prototype.getFadeOutSeconds = function () {
              return this._fadeOutSeconds
            }, t
          }();
        e.CubismMotionQueueEntry = s;
        var u = o(i(57));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismMotionQueueEntry = u.CubismMotionQueueEntry
      },
      514: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.InvalidMotionQueueEntryHandleValue = e.CubismMotionQueueManager = void 0;
        var a = i(57),
          s = i(177),
          u = function () {
            function t() {
              this._userTimeSeconds = 0, this._eventCallBack = null, this._eventCustomData = null, this._motions = new s.csmVector
            }
            return t.prototype.release = function () {
              for (var t = 0; t < this._motions.getSize(); ++t) this._motions.at(t) && (this._motions.at(t).release(), this._motions.set(t, void 0), this._motions.set(t, null));
              this._motions = null
            }, t.prototype.startMotion = function (t, i, r) {
              if (null == t) return e.InvalidMotionQueueEntryHandleValue;
              for (var n = null, o = 0; o < this._motions.getSize(); ++o) null != (n = this._motions.at(o)) && n.setFadeOut(n._motion.getFadeOutTime());
              return (n = new a.CubismMotionQueueEntry)._autoDelete = i, n._motion = t, this._motions.pushBack(n), n._motionQueueEntryHandle
            }, t.prototype.isFinished = function () {
              for (var t = this._motions.begin(); t.notEqual(this._motions.end());) {
                var e = t.ptr();
                if (null != e)
                  if (null != e._motion) {
                    if (!e.isFinished()) return !1;
                    t.preIncrement()
                  } else e.release(), e = void 0, e = null, t = this._motions.erase(t);
                else t = this._motions.erase(t)
              }
              return !0
            }, t.prototype.isFinishedByHandle = function (t) {
              for (var e = this._motions.begin(); e.notEqual(this._motions.end()); e.increment()) {
                var i = e.ptr();
                if (null != i && i._motionQueueEntryHandle == t && !i.isFinished()) return !1
              }
              return !0
            }, t.prototype.stopAllMotions = function () {
              for (var t = this._motions.begin(); t.notEqual(this._motions.end());) {
                var e = t.ptr();
                null != e ? (e.release(), e = void 0, e = null, t = this._motions.erase(t)) : t = this._motions.erase(t)
              }
            }, t.prototype.getCubismMotionQueueEntry = function (t) {
              for (var e = this._motions.begin(); e.notEqual(this._motions.end()); e.preIncrement()) {
                var i = e.ptr();
                if (null != i && i._motionQueueEntryHandle == t) return i
              }
              return null
            }, t.prototype.setEventCallback = function (t, e) {
              void 0 === e && (e = null), this._eventCallBack = t, this._eventCustomData = e
            }, t.prototype.doUpdateMotion = function (t, e) {
              for (var i = !1, r = this._motions.begin(); r.notEqual(this._motions.end());) {
                var n = r.ptr();
                if (null != n) {
                  var o = n._motion;
                  if (null != o) {
                    o.updateParameters(t, n, e), i = !0;
                    for (var a = o.getFiredEvent(n.getLastCheckEventSeconds() - n.getStartTime(), e - n.getStartTime()), s = 0; s < a.getSize(); ++s) this._eventCallBack(this, a.at(s), this._eventCustomData);
                    n.setLastCheckEventSeconds(e), n.isFinished() ? (n.release(), n = void 0, n = null, r = this._motions.erase(r)) : (n.isTriggeredFadeOut() && n.startFadeOut(n.getFadeOutSeconds(), e), r.preIncrement())
                  } else n.release(), n = void 0, n = null, r = this._motions.erase(r)
                } else r = this._motions.erase(r)
              }
              return i
            }, t
          }();
        e.CubismMotionQueueManager = u, e.InvalidMotionQueueEntryHandleValue = -1;
        var l, h = o(i(514));
        (l = e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismMotionQueueManager = h.CubismMotionQueueManager, l.InvalidMotionQueueEntryHandleValue = h.InvalidMotionQueueEntryHandleValue
      },
      175: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.Options = e.CubismPhysics = void 0;
        var a = i(736),
          s = i(788),
          u = i(697),
          l = i(492),
          h = "Angle",
          c = function () {
            function t() {
              this._physicsRig = null, this._options = new d, this._options.gravity.y = -1, this._options.gravity.x = 0, this._options.wind.x = 0, this._options.wind.y = 0
            }
            return t.create = function (e, i) {
              var r = new t;
              return r.parse(e, i), r._physicsRig.gravity.y = 0, r
            }, t.delete = function (t) {
              null != t && (t.release(), t = null)
            }, t.prototype.evaluate = function (t, e) {
              var i, r, n, o, u, l, h, c, d, p, m, g, f = new s.CubismVector2;
              d = t.getModel().parameters.values, p = t.getModel().parameters.maximumValues, m = t.getModel().parameters.minimumValues, g = t.getModel().parameters.defaultValues;
              for (var _ = 0; _ < this._physicsRig.subRigCount; ++_) {
                i = {
                  angle: 0
                }, f.x = 0, f.y = 0, u = this._physicsRig.settings.at(_), l = this._physicsRig.inputs.get(u.baseInputIndex), h = this._physicsRig.outputs.get(u.baseOutputIndex), c = this._physicsRig.particles.get(u.baseParticleIndex);
                for (var y = 0; y < u.inputCount; ++y) r = l[y].weight / 100, -1 == l[y].sourceParameterIndex && (l[y].sourceParameterIndex = t.getParameterIndex(l[y].source.id)), l[y].getNormalizedParameterValue(f, i, d[l[y].sourceParameterIndex], m[l[y].sourceParameterIndex], p[l[y].sourceParameterIndex], g[l[y].sourceParameterIndex], u.normalizationPosition, u.normalizationAngle, l[y].reflect, r);
                for (n = a.CubismMath.degreesToRadian(-i.angle), f.x = f.x * a.CubismMath.cos(n) - f.y * a.CubismMath.sin(n), f.y = f.x * a.CubismMath.sin(n) + f.y * a.CubismMath.cos(n), S(c, u.particleCount, f, i.angle, this._options.wind, .001 * u.normalizationPosition.maximum, e, 5), y = 0; y < u.outputCount; ++y) {
                  var b = h[y].vertexIndex;
                  if (b < 1 || b >= u.particleCount) break; - 1 == h[y].destinationParameterIndex && (h[y].destinationParameterIndex = t.getParameterIndex(h[y].destination.id));
                  var v = new s.CubismVector2;
                  v.x = c[b].position.x - c[b - 1].position.x, v.y = c[b].position.y - c[b - 1].position.y, o = h[y].getValue(v, c, b, h[y].reflect, this._options.gravity);
                  var C = h[y].destinationParameterIndex,
                    M = !Float32Array.prototype.slice && "subarray" in Float32Array.prototype ? JSON.parse(JSON.stringify(d.subarray(C))) : d.slice(C);
                  P(M, m[C], p[C], o, h[y]);
                  for (var x = C, B = 0; x < d.length; x++, B++) d[x] = M[B]
                }
              }
            }, t.prototype.setOptions = function (t) {
              this._options = t
            }, t.prototype.getOption = function () {
              return this._options
            }, t.prototype.release = function () {
              this._physicsRig = void 0, this._physicsRig = null
            }, t.prototype.parse = function (t, e) {
              this._physicsRig = new u.CubismPhysicsRig;
              var i = new l.CubismPhysicsJson(t, e);
              this._physicsRig.gravity = i.getGravity(), this._physicsRig.wind = i.getWind(), this._physicsRig.subRigCount = i.getSubRigCount(), this._physicsRig.settings.updateSize(this._physicsRig.subRigCount, u.CubismPhysicsSubRig, !0), this._physicsRig.inputs.updateSize(i.getTotalInputCount(), u.CubismPhysicsInput, !0), this._physicsRig.outputs.updateSize(i.getTotalOutputCount(), u.CubismPhysicsOutput, !0), this._physicsRig.particles.updateSize(i.getVertexCount(), u.CubismPhysicsParticle, !0);
              for (var r = 0, n = 0, o = 0, a = 0; a < this._physicsRig.settings.getSize(); ++a) {
                this._physicsRig.settings.at(a).normalizationPosition.minimum = i.getNormalizationPositionMinimumValue(a), this._physicsRig.settings.at(a).normalizationPosition.maximum = i.getNormalizationPositionMaximumValue(a), this._physicsRig.settings.at(a).normalizationPosition.defalut = i.getNormalizationPositionDefaultValue(a), this._physicsRig.settings.at(a).normalizationAngle.minimum = i.getNormalizationAngleMinimumValue(a), this._physicsRig.settings.at(a).normalizationAngle.maximum = i.getNormalizationAngleMaximumValue(a), this._physicsRig.settings.at(a).normalizationAngle.defalut = i.getNormalizationAngleDefaultValue(a), this._physicsRig.settings.at(a).inputCount = i.getInputCount(a), this._physicsRig.settings.at(a).baseInputIndex = r;
                for (var s = 0; s < this._physicsRig.settings.at(a).inputCount; ++s) this._physicsRig.inputs.at(r + s).sourceParameterIndex = -1, this._physicsRig.inputs.at(r + s).weight = i.getInputWeight(a, s), this._physicsRig.inputs.at(r + s).reflect = i.getInputReflect(a, s), "X" == i.getInputType(a, s) ? (this._physicsRig.inputs.at(r + s).type = u.CubismPhysicsSource.CubismPhysicsSource_X, this._physicsRig.inputs.at(r + s).getNormalizedParameterValue = p) : "Y" == i.getInputType(a, s) ? (this._physicsRig.inputs.at(r + s).type = u.CubismPhysicsSource.CubismPhysicsSource_Y, this._physicsRig.inputs.at(r + s).getNormalizedParameterValue = m) : i.getInputType(a, s) == h && (this._physicsRig.inputs.at(r + s).type = u.CubismPhysicsSource.CubismPhysicsSource_Angle, this._physicsRig.inputs.at(r + s).getNormalizedParameterValue = g), this._physicsRig.inputs.at(r + s).source.targetType = u.CubismPhysicsTargetType.CubismPhysicsTargetType_Parameter, this._physicsRig.inputs.at(r + s).source.id = i.getInputSourceId(a, s);
                for (r += this._physicsRig.settings.at(a).inputCount, this._physicsRig.settings.at(a).outputCount = i.getOutputCount(a), this._physicsRig.settings.at(a).baseOutputIndex = n, s = 0; s < this._physicsRig.settings.at(a).outputCount; ++s) this._physicsRig.outputs.at(n + s).destinationParameterIndex = -1, this._physicsRig.outputs.at(n + s).vertexIndex = i.getOutputVertexIndex(a, s), this._physicsRig.outputs.at(n + s).angleScale = i.getOutputAngleScale(a, s), this._physicsRig.outputs.at(n + s).weight = i.getOutputWeight(a, s), this._physicsRig.outputs.at(n + s).destination.targetType = u.CubismPhysicsTargetType.CubismPhysicsTargetType_Parameter, this._physicsRig.outputs.at(n + s).destination.id = i.getOutputDestinationId(a, s), "X" == i.getOutputType(a, s) ? (this._physicsRig.outputs.at(n + s).type = u.CubismPhysicsSource.CubismPhysicsSource_X, this._physicsRig.outputs.at(n + s).getValue = f, this._physicsRig.outputs.at(n + s).getScale = b) : "Y" == i.getOutputType(a, s) ? (this._physicsRig.outputs.at(n + s).type = u.CubismPhysicsSource.CubismPhysicsSource_Y, this._physicsRig.outputs.at(n + s).getValue = _, this._physicsRig.outputs.at(n + s).getScale = v) : i.getOutputType(a, s) == h && (this._physicsRig.outputs.at(n + s).type = u.CubismPhysicsSource.CubismPhysicsSource_Angle, this._physicsRig.outputs.at(n + s).getValue = y, this._physicsRig.outputs.at(n + s).getScale = C), this._physicsRig.outputs.at(n + s).reflect = i.getOutputReflect(a, s);
                for (n += this._physicsRig.settings.at(a).outputCount, this._physicsRig.settings.at(a).particleCount = i.getParticleCount(a), this._physicsRig.settings.at(a).baseParticleIndex = o, s = 0; s < this._physicsRig.settings.at(a).particleCount; ++s) this._physicsRig.particles.at(o + s).mobility = i.getParticleMobility(a, s), this._physicsRig.particles.at(o + s).delay = i.getParticleDelay(a, s), this._physicsRig.particles.at(o + s).acceleration = i.getParticleAcceleration(a, s), this._physicsRig.particles.at(o + s).radius = i.getParticleRadius(a, s), this._physicsRig.particles.at(o + s).position = i.getParticlePosition(a, s);
                o += this._physicsRig.settings.at(a).particleCount
              }
              this.initialize(), i.release(), i = void 0, i = null
            }, t.prototype.initialize = function () {
              for (var t, e, i, r = 0; r < this._physicsRig.subRigCount; ++r) {
                e = this._physicsRig.settings.at(r), (t = this._physicsRig.particles.get(e.baseParticleIndex))[0].initialPosition = new s.CubismVector2(0, 0), t[0].lastPosition = new s.CubismVector2(t[0].initialPosition.x, t[0].initialPosition.y), t[0].lastGravity = new s.CubismVector2(0, -1), t[0].lastGravity.y *= -1, t[0].velocity = new s.CubismVector2(0, 0), t[0].force = new s.CubismVector2(0, 0);
                for (var n = 1; n < e.particleCount; ++n)(i = new s.CubismVector2(0, 0)).y = t[n].radius, t[n].initialPosition = new s.CubismVector2(t[n - 1].initialPosition.x + i.x, t[n - 1].initialPosition.y + i.y), t[n].position = new s.CubismVector2(t[n].initialPosition.x, t[n].initialPosition.y), t[n].lastPosition = new s.CubismVector2(t[n].initialPosition.x, t[n].initialPosition.y), t[n].lastGravity = new s.CubismVector2(0, -1), t[n].lastGravity.y *= -1, t[n].velocity = new s.CubismVector2(0, 0), t[n].force = new s.CubismVector2(0, 0)
              }
            }, t
          }();
        e.CubismPhysics = c;
        var d = function () {
          this.gravity = new s.CubismVector2(0, 0), this.wind = new s.CubismVector2(0, 0)
        };

        function p(t, e, i, r, n, o, a, s, u, l) {
          t.x += M(i, r, n, 0, a.minimum, a.maximum, a.defalut, u) * l
        }

        function m(t, e, i, r, n, o, a, s, u, l) {
          t.y += M(i, r, n, 0, a.minimum, a.maximum, a.defalut, u) * l
        }

        function g(t, e, i, r, n, o, a, s, u, l) {
          e.angle += M(i, r, n, 0, s.minimum, s.maximum, s.defalut, u) * l
        }

        function f(t, e, i, r, n) {
          var o = t.x;
          return r && (o *= -1), o
        }

        function _(t, e, i, r, n) {
          var o = t.y;
          return r && (o *= -1), o
        }

        function y(t, e, i, r, n) {
          var o;
          return n = i >= 2 ? e[i - 1].position.substract(e[i - 2].position) : n.multiplyByScaler(-1), o = a.CubismMath.directionToRadian(n, t), r && (o *= -1), o
        }

        function b(t, e) {
          return JSON.parse(JSON.stringify(t.x))
        }

        function v(t, e) {
          return JSON.parse(JSON.stringify(t.y))
        }

        function C(t, e) {
          return JSON.parse(JSON.stringify(e))
        }

        function S(t, e, i, r, n, o, u, l) {
          var h, c, d, p, m = new s.CubismVector2(0, 0),
            g = new s.CubismVector2(0, 0),
            f = new s.CubismVector2(0, 0),
            _ = new s.CubismVector2(0, 0);
          t[0].position = new s.CubismVector2(i.x, i.y), h = a.CubismMath.degreesToRadian(r), (p = a.CubismMath.radianToDirection(h)).normalize();
          for (var y = 1; y < e; ++y) t[y].force = p.multiplyByScaler(t[y].acceleration).add(n), t[y].lastPosition = new s.CubismVector2(t[y].position.x, t[y].position.y), c = t[y].delay * u * 30, m = t[y].position.substract(t[y - 1].position), d = a.CubismMath.directionToRadian(t[y].lastGravity, p) / l, m.x = a.CubismMath.cos(d) * m.x - m.y * a.CubismMath.sin(d), m.y = a.CubismMath.sin(d) * m.x + m.y * a.CubismMath.cos(d), t[y].position = t[y - 1].position.add(m), g = t[y].velocity.multiplyByScaler(c), f = t[y].force.multiplyByScaler(c).multiplyByScaler(c), t[y].position = t[y].position.add(g).add(f), (_ = t[y].position.substract(t[y - 1].position)).normalize(), t[y].position = t[y - 1].position.add(_.multiplyByScaler(t[y].radius)), a.CubismMath.abs(t[y].position.x) < o && (t[y].position.x = 0), 0 != c && (t[y].velocity = t[y].position.substract(t[y].lastPosition), t[y].velocity = t[y].velocity.divisionByScalar(c), t[y].velocity = t[y].velocity.multiplyByScaler(t[y].mobility)), t[y].force = new s.CubismVector2(0, 0), t[y].lastGravity = new s.CubismVector2(p.x, p.y)
        }

        function P(t, e, i, r, n) {
          var o, a;
          (o = r * n.getScale(n.translationScale, n.angleScale)) < e ? (o < n.valueBelowMinimum && (n.valueBelowMinimum = o), o = e) : o > i && (o > n.valueExceededMaximum && (n.valueExceededMaximum = o), o = i), (a = n.weight / 100) >= 1 || (o = t[0] * (1 - a) + o * a), t[0] = o
        }

        function M(t, e, i, r, n, o, s, u) {
          var l = 0,
            h = a.CubismMath.max(i, e);
          h < t && (t = h);
          var c = a.CubismMath.min(i, e);
          c > t && (t = c);
          var d, p, m = a.CubismMath.min(n, o),
            g = a.CubismMath.max(n, o),
            f = s,
            _ = (d = c, p = h, a.CubismMath.min(d, p) + function (t, e) {
              var i = a.CubismMath.max(t, e),
                r = a.CubismMath.min(t, e);
              return a.CubismMath.abs(i - r)
            }(d, p) / 2),
            y = t - _;
          switch (function (t) {
            var e = 0;
            return t > 0 ? e = 1 : t < 0 && (e = -1), e
          }(y)) {
            case 1:
              var b = g - f;
              0 != (v = h - _) && (l = y * (b / v), l += f);
              break;
            case -1:
              var v;
              b = m - f, 0 != (v = c - _) && (l = y * (b / v), l += f);
              break;
            case 0:
              l = f
          }
          return u ? l : -1 * l
        }
        e.Options = d;
        var x, B = o(i(175));
        (x = e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismPhysics = B.CubismPhysics, x.Options = B.Options
      },
      697: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismPhysicsRig = e.CubismPhysicsOutput = e.CubismPhysicsInput = e.CubismPhysicsSubRig = e.CubismPhysicsParticle = e.CubismPhysicsNormalization = e.CubismPhysicsParameter = e.PhysicsJsonEffectiveForces = e.CubismPhysicsSource = e.CubismPhysicsTargetType = void 0;
        var a, s, u = i(788),
          l = i(177);
        (s = e.CubismPhysicsTargetType || (e.CubismPhysicsTargetType = {}))[s.CubismPhysicsTargetType_Parameter = 0] = "CubismPhysicsTargetType_Parameter", (a = e.CubismPhysicsSource || (e.CubismPhysicsSource = {}))[a.CubismPhysicsSource_X = 0] = "CubismPhysicsSource_X", a[a.CubismPhysicsSource_Y = 1] = "CubismPhysicsSource_Y", a[a.CubismPhysicsSource_Angle = 2] = "CubismPhysicsSource_Angle";
        e.PhysicsJsonEffectiveForces = function () {
          this.gravity = new u.CubismVector2(0, 0), this.wind = new u.CubismVector2(0, 0)
        };
        var h = function () {};
        e.CubismPhysicsParameter = h;
        var c = function () {};
        e.CubismPhysicsNormalization = c;
        e.CubismPhysicsParticle = function () {
          this.initialPosition = new u.CubismVector2(0, 0), this.position = new u.CubismVector2(0, 0), this.lastPosition = new u.CubismVector2(0, 0), this.lastGravity = new u.CubismVector2(0, 0), this.force = new u.CubismVector2(0, 0), this.velocity = new u.CubismVector2(0, 0)
        };
        e.CubismPhysicsSubRig = function () {
          this.normalizationPosition = new c, this.normalizationAngle = new c
        };
        e.CubismPhysicsInput = function () {
          this.source = new h
        };
        e.CubismPhysicsOutput = function () {
          this.destination = new h, this.translationScale = new u.CubismVector2(0, 0)
        };
        e.CubismPhysicsRig = function () {
          this.settings = new l.csmVector, this.inputs = new l.csmVector, this.outputs = new l.csmVector, this.particles = new l.csmVector, this.gravity = new u.CubismVector2(0, 0), this.wind = new u.CubismVector2(0, 0)
        };
        var d, p = o(i(697));
        (d = e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismPhysicsInput = p.CubismPhysicsInput, d.CubismPhysicsNormalization = p.CubismPhysicsNormalization, d.CubismPhysicsOutput = p.CubismPhysicsOutput, d.CubismPhysicsParameter = p.CubismPhysicsParameter, d.CubismPhysicsParticle = p.CubismPhysicsParticle, d.CubismPhysicsRig = p.CubismPhysicsRig, d.CubismPhysicsSource = p.CubismPhysicsSource, d.CubismPhysicsSubRig = p.CubismPhysicsSubRig, d.CubismPhysicsTargetType = p.CubismPhysicsTargetType, d.PhysicsJsonEffectiveForces = p.PhysicsJsonEffectiveForces
      },
      492: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismPhysicsJson = void 0;
        var a = i(348),
          s = i(788),
          u = i(127),
          l = "Position",
          h = "Angle",
          c = "Type",
          d = "Meta",
          p = "EffectiveForces",
          m = "Gravity",
          g = "Wind",
          f = "PhysicsSettings",
          _ = "Normalization",
          y = "Minimum",
          b = "Maximum",
          v = "Default",
          C = "Reflect",
          S = "Weight",
          P = "Input",
          M = "Output",
          x = "Vertices",
          B = function () {
            function t(t, e) {
              this._json = u.CubismJson.create(t, e)
            }
            return t.prototype.release = function () {
              u.CubismJson.delete(this._json)
            }, t.prototype.getGravity = function () {
              var t = new s.CubismVector2(0, 0);
              return t.x = this._json.getRoot().getValueByString(d).getValueByString(p).getValueByString(m).getValueByString("X").toFloat(), t.y = this._json.getRoot().getValueByString(d).getValueByString(p).getValueByString(m).getValueByString("Y").toFloat(), t
            }, t.prototype.getWind = function () {
              var t = new s.CubismVector2(0, 0);
              return t.x = this._json.getRoot().getValueByString(d).getValueByString(p).getValueByString(g).getValueByString("X").toFloat(), t.y = this._json.getRoot().getValueByString(d).getValueByString(p).getValueByString(g).getValueByString("Y").toFloat(), t
            }, t.prototype.getSubRigCount = function () {
              return this._json.getRoot().getValueByString(d).getValueByString("PhysicsSettingCount").toInt()
            }, t.prototype.getTotalInputCount = function () {
              return this._json.getRoot().getValueByString(d).getValueByString("TotalInputCount").toInt()
            }, t.prototype.getTotalOutputCount = function () {
              return this._json.getRoot().getValueByString(d).getValueByString("TotalOutputCount").toInt()
            }, t.prototype.getVertexCount = function () {
              return this._json.getRoot().getValueByString(d).getValueByString("VertexCount").toInt()
            }, t.prototype.getNormalizationPositionMinimumValue = function (t) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(_).getValueByString(l).getValueByString(y).toFloat()
            }, t.prototype.getNormalizationPositionMaximumValue = function (t) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(_).getValueByString(l).getValueByString(b).toFloat()
            }, t.prototype.getNormalizationPositionDefaultValue = function (t) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(_).getValueByString(l).getValueByString(v).toFloat()
            }, t.prototype.getNormalizationAngleMinimumValue = function (t) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(_).getValueByString(h).getValueByString(y).toFloat()
            }, t.prototype.getNormalizationAngleMaximumValue = function (t) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(_).getValueByString(h).getValueByString(b).toFloat()
            }, t.prototype.getNormalizationAngleDefaultValue = function (t) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(_).getValueByString(h).getValueByString(v).toFloat()
            }, t.prototype.getInputCount = function (t) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(P).getVector().getSize()
            }, t.prototype.getInputWeight = function (t, e) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(P).getValueByIndex(e).getValueByString(S).toFloat()
            }, t.prototype.getInputReflect = function (t, e) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(P).getValueByIndex(e).getValueByString(C).toBoolean()
            }, t.prototype.getInputType = function (t, e) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(P).getValueByIndex(e).getValueByString(c).getRawString()
            }, t.prototype.getInputSourceId = function (t, e) {
              return a.CubismFramework.getIdManager().getId(this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(P).getValueByIndex(e).getValueByString("Source").getValueByString("Id").getRawString())
            }, t.prototype.getOutputCount = function (t) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(M).getVector().getSize()
            }, t.prototype.getOutputVertexIndex = function (t, e) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(M).getValueByIndex(e).getValueByString("VertexIndex").toInt()
            }, t.prototype.getOutputAngleScale = function (t, e) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(M).getValueByIndex(e).getValueByString("Scale").toFloat()
            }, t.prototype.getOutputWeight = function (t, e) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(M).getValueByIndex(e).getValueByString(S).toFloat()
            }, t.prototype.getOutputDestinationId = function (t, e) {
              return a.CubismFramework.getIdManager().getId(this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(M).getValueByIndex(e).getValueByString("Destination").getValueByString("Id").getRawString())
            }, t.prototype.getOutputType = function (t, e) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(M).getValueByIndex(e).getValueByString(c).getRawString()
            }, t.prototype.getOutputReflect = function (t, e) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(M).getValueByIndex(e).getValueByString(C).toBoolean()
            }, t.prototype.getParticleCount = function (t) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(x).getVector().getSize()
            }, t.prototype.getParticleMobility = function (t, e) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(x).getValueByIndex(e).getValueByString("Mobility").toFloat()
            }, t.prototype.getParticleDelay = function (t, e) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(x).getValueByIndex(e).getValueByString("Delay").toFloat()
            }, t.prototype.getParticleAcceleration = function (t, e) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(x).getValueByIndex(e).getValueByString("Acceleration").toFloat()
            }, t.prototype.getParticleRadius = function (t, e) {
              return this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(x).getValueByIndex(e).getValueByString("Radius").toFloat()
            }, t.prototype.getParticlePosition = function (t, e) {
              var i = new s.CubismVector2(0, 0);
              return i.x = this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(x).getValueByIndex(e).getValueByString(l).getValueByString("X").toFloat(), i.y = this._json.getRoot().getValueByString(f).getValueByIndex(t).getValueByString(x).getValueByIndex(e).getValueByString(l).getValueByString("Y").toFloat(), i
            }, t
          }();
        e.CubismPhysicsJson = B;
        var w = o(i(492));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismPhysicsJson = w.CubismPhysicsJson
      },
      44: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismTextureColor = e.CubismBlendMode = e.CubismRenderer = void 0;
        var a, s = i(946),
          u = function () {
            function t() {
              this._isCulling = !1, this._isPremultipliedAlpha = !1, this._anisortopy = 0, this._model = null, this._modelColor = new l, this._mvpMatrix4x4 = new s.CubismMatrix44, this._mvpMatrix4x4.loadIdentity()
            }
            return t.create = function () {
              return null
            }, t.delete = function (t) {}, t.prototype.initialize = function (t) {
              this._model = t
            }, t.prototype.drawModel = function () {
              null != this.getModel() && this.doDrawModel()
            }, t.prototype.setMvpMatrix = function (t) {
              this._mvpMatrix4x4.setMatrix(t.getArray())
            }, t.prototype.getMvpMatrix = function () {
              return this._mvpMatrix4x4
            }, t.prototype.setModelColor = function (t, e, i, r) {
              t < 0 ? t = 0 : t > 1 && (t = 1), e < 0 ? e = 0 : e > 1 && (e = 1), i < 0 ? i = 0 : i > 1 && (i = 1), r < 0 ? r = 0 : r > 1 && (r = 1), this._modelColor.R = t, this._modelColor.G = e, this._modelColor.B = i, this._modelColor.A = r
            }, t.prototype.getModelColor = function () {
              return JSON.parse(JSON.stringify(this._modelColor))
            }, t.prototype.setIsPremultipliedAlpha = function (t) {
              this._isPremultipliedAlpha = t
            }, t.prototype.isPremultipliedAlpha = function () {
              return this._isPremultipliedAlpha
            }, t.prototype.setIsCulling = function (t) {
              this._isCulling = t
            }, t.prototype.isCulling = function () {
              return this._isCulling
            }, t.prototype.setAnisotropy = function (t) {
              this._anisortopy = t
            }, t.prototype.getAnisotropy = function () {
              return this._anisortopy
            }, t.prototype.getModel = function () {
              return this._model
            }, t
          }();
        e.CubismRenderer = u, (a = e.CubismBlendMode || (e.CubismBlendMode = {}))[a.CubismBlendMode_Normal = 0] = "CubismBlendMode_Normal", a[a.CubismBlendMode_Additive = 1] = "CubismBlendMode_Additive", a[a.CubismBlendMode_Multiplicative = 2] = "CubismBlendMode_Multiplicative";
        var l = function () {
          this.R = 1, this.G = 1, this.B = 1, this.A = 1
        };
        e.CubismTextureColor = l;
        var h, c = o(i(44));
        (h = e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismBlendMode = c.CubismBlendMode, h.CubismRenderer = c.CubismRenderer, h.CubismTextureColor = c.CubismTextureColor
      },
      827: function (t, e, i) {
        var r, n = this && this.__extends || (r = function (t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function (t, e) {
                t.__proto__ = e
              } || function (t, e) {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
              })(t, e)
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function i() {
              this.constructor = t
            }
            r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
          }),
          o = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          a = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          s = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && o(e, t, i);
            return a(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismRenderer_WebGL = e.fragmentShaderSrcMaskInvertedPremultipliedAlpha = e.fragmentShaderSrcMaskPremultipliedAlpha = e.fragmentShaderSrcPremultipliedAlpha = e.vertexShaderSrcMasked = e.vertexShaderSrc = e.fragmentShaderSrcsetupMask = e.vertexShaderSrcSetupMask = e.ShaderNames = e.CubismShaderSet = e.CubismShader_WebGL = e.CubismClippingContext = e.CubismRenderTextureResource = e.CubismClippingManager_WebGL = void 0;
        var u, l, h, c = i(348),
          d = i(946),
          p = i(981),
          m = i(746),
          g = i(177),
          f = i(713),
          _ = i(44),
          y = function () {
            function t() {
              this._maskRenderTexture = null, this._colorBuffer = null, this._currentFrameNo = 0, this._clippingMaskBufferSize = 256, this._clippingContextListForMask = new g.csmVector, this._clippingContextListForDraw = new g.csmVector, this._channelColors = new g.csmVector, this._tmpBoundsOnModel = new m.csmRect, this._tmpMatrix = new d.CubismMatrix44, this._tmpMatrixForMask = new d.CubismMatrix44, this._tmpMatrixForDraw = new d.CubismMatrix44, this._maskTexture = null;
              var t = new _.CubismTextureColor;
              t.R = 1, t.G = 0, t.B = 0, t.A = 0, this._channelColors.pushBack(t), (t = new _.CubismTextureColor).R = 0, t.G = 1, t.B = 0, t.A = 0, this._channelColors.pushBack(t), (t = new _.CubismTextureColor).R = 0, t.G = 0, t.B = 1, t.A = 0, this._channelColors.pushBack(t), (t = new _.CubismTextureColor).R = 0, t.G = 0, t.B = 0, t.A = 1, this._channelColors.pushBack(t)
            }
            return t.prototype.getChannelFlagAsColor = function (t) {
              return this._channelColors.at(t)
            }, t.prototype.getMaskRenderTexture = function () {
              var t = 0;
              if (this._maskTexture && 0 != this._maskTexture.texture && (this._maskTexture.frameNo = this._currentFrameNo, t = this._maskTexture.texture), 0 == t) {
                var e = this._clippingMaskBufferSize;
                this._colorBuffer = this.gl.createTexture(), this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorBuffer), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, e, e, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.gl.bindTexture(this.gl.TEXTURE_2D, null), t = this.gl.createFramebuffer(), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, t), this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this._colorBuffer, 0), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, h), this._maskTexture = new b(this._currentFrameNo, t)
              }
              return t
            }, t.prototype.setGL = function (t) {
              this.gl = t
            }, t.prototype.calcClippedDrawTotalBounds = function (t, e) {
              for (var i = Number.MAX_VALUE, r = Number.MAX_VALUE, n = Number.MIN_VALUE, o = Number.MIN_VALUE, a = e._clippedDrawableIndexList.length, s = 0; s < a; s++) {
                for (var u = e._clippedDrawableIndexList[s], l = t.getDrawableVertexCount(u), h = t.getDrawableVertices(u), d = Number.MAX_VALUE, p = Number.MAX_VALUE, m = Number.MIN_VALUE, g = Number.MIN_VALUE, f = l * c.Constant.vertexStep, _ = c.Constant.vertexOffset; _ < f; _ += c.Constant.vertexStep) {
                  var y = h[_],
                    b = h[_ + 1];
                  y < d && (d = y), y > m && (m = y), b < p && (p = b), b > g && (g = b)
                }
                if (d != Number.MAX_VALUE)
                  if (d < i && (i = d), p < r && (r = p), m > n && (n = m), g > o && (o = g), i == Number.MAX_VALUE) e._allClippedDrawRect.x = 0, e._allClippedDrawRect.y = 0, e._allClippedDrawRect.width = 0, e._allClippedDrawRect.height = 0, e._isUsing = !1;
                  else {
                    e._isUsing = !0;
                    var v = n - i,
                      C = o - r;
                    e._allClippedDrawRect.x = i, e._allClippedDrawRect.y = r, e._allClippedDrawRect.width = v, e._allClippedDrawRect.height = C
                  }
              }
            }, t.prototype.release = function () {
              for (var t = 0; t < this._clippingContextListForMask.getSize(); t++) this._clippingContextListForMask.at(t) && (this._clippingContextListForMask.at(t).release(), this._clippingContextListForMask.set(t, void 0)), this._clippingContextListForMask.set(t, null);
              for (this._clippingContextListForMask = null, t = 0; t < this._clippingContextListForDraw.getSize(); t++) this._clippingContextListForDraw.set(t, null);
              for (this._clippingContextListForDraw = null, this._maskTexture && (this.gl.deleteFramebuffer(this._maskTexture.texture), this._maskTexture = null), t = 0; t < this._channelColors.getSize(); t++) this._channelColors.set(t, null);
              this._channelColors = null, this.gl.deleteTexture(this._colorBuffer), this._colorBuffer = null
            }, t.prototype.initialize = function (t, e, i, r) {
              for (var n = 0; n < e; n++)
                if (r[n] <= 0) this._clippingContextListForDraw.pushBack(null);
                else {
                  var o = this.findSameClip(i[n], r[n]);
                  null == o && (o = new v(this, i[n], r[n]), this._clippingContextListForMask.pushBack(o)), o.addClippedDrawable(n), this._clippingContextListForDraw.pushBack(o)
                }
            }, t.prototype.setupClippingContext = function (t, e) {
              this._currentFrameNo++;
              for (var i = 0, r = 0; r < this._clippingContextListForMask.getSize(); r++) {
                var n = this._clippingContextListForMask.at(r);
                this.calcClippedDrawTotalBounds(t, n), n._isUsing && i++
              }
              if (i > 0) {
                for (this.gl.viewport(0, 0, this._clippingMaskBufferSize, this._clippingMaskBufferSize), this._maskRenderTexture = this.getMaskRenderTexture(), e.getMvpMatrix(), e.preDraw(), this.setupLayoutBounds(i), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this._maskRenderTexture), this.gl.clearColor(1, 1, 1, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT), r = 0; r < this._clippingContextListForMask.getSize(); r++) {
                  var o = this._clippingContextListForMask.at(r),
                    a = o._allClippedDrawRect,
                    s = o._layoutBounds;
                  this._tmpBoundsOnModel.setRect(a), this._tmpBoundsOnModel.expand(.05 * a.width, .05 * a.height);
                  var u = s.width / this._tmpBoundsOnModel.width,
                    c = s.height / this._tmpBoundsOnModel.height;
                  this._tmpMatrix.loadIdentity(), this._tmpMatrix.translateRelative(-1, -1), this._tmpMatrix.scaleRelative(2, 2), this._tmpMatrix.translateRelative(s.x, s.y), this._tmpMatrix.scaleRelative(u, c), this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y), this._tmpMatrixForMask.setMatrix(this._tmpMatrix.getArray()), this._tmpMatrix.loadIdentity(), this._tmpMatrix.translateRelative(s.x, s.y), this._tmpMatrix.scaleRelative(u, c), this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y), this._tmpMatrixForDraw.setMatrix(this._tmpMatrix.getArray()), o._matrixForMask.setMatrix(this._tmpMatrixForMask.getArray()), o._matrixForDraw.setMatrix(this._tmpMatrixForDraw.getArray());
                  for (var d = o._clippingIdCount, p = 0; p < d; p++) {
                    var m = o._clippingIdList[p];
                    t.getDrawableDynamicFlagVertexPositionsDidChange(m) && (e.setIsCulling(0 != t.getDrawableCulling(m)), e.setClippingContextBufferForMask(o), e.drawMesh(t.getDrawableTextureIndices(m), t.getDrawableVertexIndexCount(m), t.getDrawableVertexCount(m), t.getDrawableVertexIndices(m), t.getDrawableVertices(m), t.getDrawableVertexUvs(m), t.getDrawableOpacity(m), _.CubismBlendMode.CubismBlendMode_Normal, !1))
                  }
                }
                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, h), e.setClippingContextBufferForMask(null), this.gl.viewport(l[0], l[1], l[2], l[3])
              }
            }, t.prototype.findSameClip = function (t, e) {
              for (var i = 0; i < this._clippingContextListForMask.getSize(); i++) {
                var r = this._clippingContextListForMask.at(i),
                  n = r._clippingIdCount;
                if (n == e) {
                  for (var o = 0, a = 0; a < n; a++)
                    for (var s = r._clippingIdList[a], u = 0; u < n; u++)
                      if (t[u] == s) {
                        o++;
                        break
                      } if (o == n) return r
                }
              }
              return null
            }, t.prototype.setupLayoutBounds = function (t) {
              var e = t / 4,
                i = t % 4;
              e = ~~e, i = ~~i;
              for (var r = 0, n = 0; n < 4; n++) {
                var o = e + (n < i ? 1 : 0);
                if (0 == o);
                else if (1 == o) {
                  var a = this._clippingContextListForMask.at(r++);
                  a._layoutChannelNo = n, a._layoutBounds.x = 0, a._layoutBounds.y = 0, a._layoutBounds.width = 1, a._layoutBounds.height = 1
                } else if (2 == o)
                  for (var s = 0; s < o; s++) u = ~~(u = s % 2), (h = this._clippingContextListForMask.at(r++))._layoutChannelNo = n, h._layoutBounds.x = .5 * u, h._layoutBounds.y = 0, h._layoutBounds.width = .5, h._layoutBounds.height = 1;
                else if (o <= 4)
                  for (s = 0; s < o; s++) u = ~~(u = s % 2), l = ~~(l = s / 2), (h = this._clippingContextListForMask.at(r++))._layoutChannelNo = n, h._layoutBounds.x = .5 * u, h._layoutBounds.y = .5 * l, h._layoutBounds.width = .5, h._layoutBounds.height = .5;
                else if (o <= 9)
                  for (s = 0; s < o; s++) {
                    var u, l, h;
                    u = ~~(u = s % 3), l = ~~(l = s / 3), (h = this._clippingContextListForMask.at(r++))._layoutChannelNo = n, h._layoutBounds.x = u / 3, h._layoutBounds.y = l / 3, h._layoutBounds.width = 1 / 3, h._layoutBounds.height = 1 / 3
                  } else f.CubismLogError("not supported mask count : {0}", o)
              }
            }, t.prototype.getColorBuffer = function () {
              return this._colorBuffer
            }, t.prototype.getClippingContextListForDraw = function () {
              return this._clippingContextListForDraw
            }, t.prototype.setClippingMaskBufferSize = function (t) {
              this._clippingMaskBufferSize = t
            }, t.prototype.getClippingMaskBufferSize = function () {
              return this._clippingMaskBufferSize
            }, t
          }();
        e.CubismClippingManager_WebGL = y;
        var b = function (t, e) {
          this.frameNo = t, this.texture = e
        };
        e.CubismRenderTextureResource = b;
        var v = function () {
          function t(t, e, i) {
            this._owner = t, this._clippingIdList = e, this._clippingIdCount = i, this._allClippedDrawRect = new m.csmRect, this._layoutBounds = new m.csmRect, this._clippedDrawableIndexList = [], this._matrixForMask = new d.CubismMatrix44, this._matrixForDraw = new d.CubismMatrix44
          }
          return t.prototype.release = function () {
            null != this._layoutBounds && (this._layoutBounds = null), null != this._allClippedDrawRect && (this._allClippedDrawRect = null), null != this._clippedDrawableIndexList && (this._clippedDrawableIndexList = null)
          }, t.prototype.addClippedDrawable = function (t) {
            this._clippedDrawableIndexList.push(t)
          }, t.prototype.getClippingManager = function () {
            return this._owner
          }, t.prototype.setGl = function (t) {
            this._owner.setGL(t)
          }, t
        }();
        e.CubismClippingContext = v;
        var C = function () {
          function t() {
            this._shaderSets = new g.csmVector
          }
          return t.getInstance = function () {
            return null == u ? u = new t : u
          }, t.deleteInstance = function () {
            u && (u.release(), u = null)
          }, t.prototype.release = function () {
            this.releaseShaderProgram()
          }, t.prototype.setupShaderProgram = function (t, e, i, r, n, o, a, s, u, l, h, c, d) {
            var p, m, g, y;
            if (h || f.CubismLogError("NoPremultipliedAlpha is not allowed"), 0 == this._shaderSets.getSize() && this.generateShaders(), null != t.getClippingContextBufferForMask()) {
              var b = this._shaderSets.at(S.ShaderNames_SetupMask);
              this.gl.useProgram(b.shaderProgram), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.uniform1i(b.samplerTexture0Location, 0), null == a.vertex && (a.vertex = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, a.vertex), this.gl.bufferData(this.gl.ARRAY_BUFFER, r, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(b.attributePositionLocation), this.gl.vertexAttribPointer(b.attributePositionLocation, 2, this.gl.FLOAT, !1, 0, 0), null == a.uv && (a.uv = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, a.uv), this.gl.bufferData(this.gl.ARRAY_BUFFER, o, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(b.attributeTexCoordLocation), this.gl.vertexAttribPointer(b.attributeTexCoordLocation, 2, this.gl.FLOAT, !1, 0, 0);
              var v = t.getClippingContextBufferForMask()._layoutChannelNo,
                C = t.getClippingContextBufferForMask().getClippingManager().getChannelFlagAsColor(v);
              this.gl.uniform4f(b.uniformChannelFlagLocation, C.R, C.G, C.B, C.A), this.gl.uniformMatrix4fv(b.uniformClipMatrixLocation, !1, t.getClippingContextBufferForMask()._matrixForMask.getArray());
              var M = t.getClippingContextBufferForMask()._layoutBounds;
              this.gl.uniform4f(b.uniformBaseColorLocation, 2 * M.x - 1, 2 * M.y - 1, 2 * M.getRight() - 1, 2 * M.getBottom() - 1), p = this.gl.ZERO, m = this.gl.ONE_MINUS_SRC_COLOR, g = this.gl.ZERO, y = this.gl.ONE_MINUS_SRC_ALPHA
            } else {
              var x = null != t.getClippingContextBufferForDraw(),
                B = x ? d ? 2 : 1 : 0;
              switch (b = new P, u) {
                case _.CubismBlendMode.CubismBlendMode_Normal:
                default:
                  b = this._shaderSets.at(S.ShaderNames_NormalPremultipliedAlpha + B), p = this.gl.ONE, m = this.gl.ONE_MINUS_SRC_ALPHA, g = this.gl.ONE, y = this.gl.ONE_MINUS_SRC_ALPHA;
                  break;
                case _.CubismBlendMode.CubismBlendMode_Additive:
                  b = this._shaderSets.at(S.ShaderNames_AddPremultipliedAlpha + B), p = this.gl.ONE, m = this.gl.ONE, g = this.gl.ZERO, y = this.gl.ONE;
                  break;
                case _.CubismBlendMode.CubismBlendMode_Multiplicative:
                  b = this._shaderSets.at(S.ShaderNames_MultPremultipliedAlpha + B), p = this.gl.DST_COLOR, m = this.gl.ONE_MINUS_SRC_ALPHA, g = this.gl.ZERO, y = this.gl.ONE
              }
              if (this.gl.useProgram(b.shaderProgram), null == a.vertex && (a.vertex = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, a.vertex), this.gl.bufferData(this.gl.ARRAY_BUFFER, r, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(b.attributePositionLocation), this.gl.vertexAttribPointer(b.attributePositionLocation, 2, this.gl.FLOAT, !1, 0, 0), null == a.uv && (a.uv = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, a.uv), this.gl.bufferData(this.gl.ARRAY_BUFFER, o, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(b.attributeTexCoordLocation), this.gl.vertexAttribPointer(b.attributeTexCoordLocation, 2, this.gl.FLOAT, !1, 0, 0), x) {
                this.gl.activeTexture(this.gl.TEXTURE1);
                var w = t.getClippingContextBufferForDraw().getClippingManager().getColorBuffer();
                this.gl.bindTexture(this.gl.TEXTURE_2D, w), this.gl.uniform1i(b.samplerTexture1Location, 1), this.gl.uniformMatrix4fv(b.uniformClipMatrixLocation, !1, t.getClippingContextBufferForDraw()._matrixForDraw.getArray()), v = t.getClippingContextBufferForDraw()._layoutChannelNo, C = t.getClippingContextBufferForDraw().getClippingManager().getChannelFlagAsColor(v), this.gl.uniform4f(b.uniformChannelFlagLocation, C.R, C.G, C.B, C.A)
              }
              this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.uniform1i(b.samplerTexture0Location, 0), this.gl.uniformMatrix4fv(b.uniformMatrixLocation, !1, c.getArray()), this.gl.uniform4f(b.uniformBaseColorLocation, l.R, l.G, l.B, l.A)
            }
            null == a.index && (a.index = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, a.index), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, n, this.gl.DYNAMIC_DRAW), this.gl.blendFuncSeparate(p, m, g, y)
          }, t.prototype.releaseShaderProgram = function () {
            for (var t = 0; t < this._shaderSets.getSize(); t++) this.gl.deleteProgram(this._shaderSets.at(t).shaderProgram), this._shaderSets.at(t).shaderProgram = 0, this._shaderSets.set(t, void 0), this._shaderSets.set(t, null)
          }, t.prototype.generateShaders = function () {
            for (var t = 0; t < 10; t++) this._shaderSets.pushBack(new P);
            this._shaderSets.at(0).shaderProgram = this.loadShaderProgram(e.vertexShaderSrcSetupMask, e.fragmentShaderSrcsetupMask), this._shaderSets.at(1).shaderProgram = this.loadShaderProgram(e.vertexShaderSrc, e.fragmentShaderSrcPremultipliedAlpha), this._shaderSets.at(2).shaderProgram = this.loadShaderProgram(e.vertexShaderSrcMasked, e.fragmentShaderSrcMaskPremultipliedAlpha), this._shaderSets.at(3).shaderProgram = this.loadShaderProgram(e.vertexShaderSrcMasked, e.fragmentShaderSrcMaskInvertedPremultipliedAlpha), this._shaderSets.at(4).shaderProgram = this._shaderSets.at(1).shaderProgram, this._shaderSets.at(5).shaderProgram = this._shaderSets.at(2).shaderProgram, this._shaderSets.at(6).shaderProgram = this._shaderSets.at(3).shaderProgram, this._shaderSets.at(7).shaderProgram = this._shaderSets.at(1).shaderProgram, this._shaderSets.at(8).shaderProgram = this._shaderSets.at(2).shaderProgram, this._shaderSets.at(9).shaderProgram = this._shaderSets.at(3).shaderProgram, this._shaderSets.at(0).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(0).shaderProgram, "a_position"), this._shaderSets.at(0).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(0).shaderProgram, "a_texCoord"), this._shaderSets.at(0).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "s_texture0"), this._shaderSets.at(0).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_clipMatrix"), this._shaderSets.at(0).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_channelFlag"), this._shaderSets.at(0).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_baseColor"), this._shaderSets.at(1).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(1).shaderProgram, "a_position"), this._shaderSets.at(1).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(1).shaderProgram, "a_texCoord"), this._shaderSets.at(1).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "s_texture0"), this._shaderSets.at(1).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "u_matrix"), this._shaderSets.at(1).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "u_baseColor"), this._shaderSets.at(2).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(2).shaderProgram, "a_position"), this._shaderSets.at(2).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(2).shaderProgram, "a_texCoord"), this._shaderSets.at(2).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "s_texture0"), this._shaderSets.at(2).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "s_texture1"), this._shaderSets.at(2).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_matrix"), this._shaderSets.at(2).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_clipMatrix"), this._shaderSets.at(2).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_channelFlag"), this._shaderSets.at(2).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_baseColor"), this._shaderSets.at(3).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(3).shaderProgram, "a_position"), this._shaderSets.at(3).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(3).shaderProgram, "a_texCoord"), this._shaderSets.at(3).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "s_texture0"), this._shaderSets.at(3).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "s_texture1"), this._shaderSets.at(3).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_matrix"), this._shaderSets.at(3).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_clipMatrix"), this._shaderSets.at(3).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_channelFlag"), this._shaderSets.at(3).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_baseColor"), this._shaderSets.at(4).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(4).shaderProgram, "a_position"), this._shaderSets.at(4).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(4).shaderProgram, "a_texCoord"), this._shaderSets.at(4).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "s_texture0"), this._shaderSets.at(4).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "u_matrix"), this._shaderSets.at(4).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "u_baseColor"), this._shaderSets.at(5).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(5).shaderProgram, "a_position"), this._shaderSets.at(5).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(5).shaderProgram, "a_texCoord"), this._shaderSets.at(5).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "s_texture0"), this._shaderSets.at(5).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "s_texture1"), this._shaderSets.at(5).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_matrix"), this._shaderSets.at(5).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_clipMatrix"), this._shaderSets.at(5).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_channelFlag"), this._shaderSets.at(5).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_baseColor"), this._shaderSets.at(6).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(6).shaderProgram, "a_position"), this._shaderSets.at(6).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(6).shaderProgram, "a_texCoord"), this._shaderSets.at(6).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "s_texture0"), this._shaderSets.at(6).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "s_texture1"), this._shaderSets.at(6).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_matrix"), this._shaderSets.at(6).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_clipMatrix"), this._shaderSets.at(6).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_channelFlag"), this._shaderSets.at(6).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_baseColor"), this._shaderSets.at(7).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(7).shaderProgram, "a_position"), this._shaderSets.at(7).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(7).shaderProgram, "a_texCoord"), this._shaderSets.at(7).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, "s_texture0"), this._shaderSets.at(7).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, "u_matrix"), this._shaderSets.at(7).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, "u_baseColor"), this._shaderSets.at(8).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(8).shaderProgram, "a_position"), this._shaderSets.at(8).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(8).shaderProgram, "a_texCoord"), this._shaderSets.at(8).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "s_texture0"), this._shaderSets.at(8).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "s_texture1"), this._shaderSets.at(8).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "u_matrix"), this._shaderSets.at(8).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "u_clipMatrix"), this._shaderSets.at(8).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "u_channelFlag"), this._shaderSets.at(8).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "u_baseColor"), this._shaderSets.at(9).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(9).shaderProgram, "a_position"), this._shaderSets.at(9).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(9).shaderProgram, "a_texCoord"), this._shaderSets.at(9).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "s_texture0"), this._shaderSets.at(9).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "s_texture1"), this._shaderSets.at(9).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "u_matrix"), this._shaderSets.at(9).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "u_clipMatrix"), this._shaderSets.at(9).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "u_channelFlag"), this._shaderSets.at(9).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "u_baseColor")
          }, t.prototype.loadShaderProgram = function (t, e) {
            var i = this.gl.createProgram(),
              r = this.compileShaderSource(this.gl.VERTEX_SHADER, t);
            if (!r) return f.CubismLogError("Vertex shader compile error!"), 0;
            var n = this.compileShaderSource(this.gl.FRAGMENT_SHADER, e);
            return n ? (this.gl.attachShader(i, r), this.gl.attachShader(i, n), this.gl.linkProgram(i), this.gl.getProgramParameter(i, this.gl.LINK_STATUS) ? (this.gl.deleteShader(r), this.gl.deleteShader(n), i) : (f.CubismLogError("Failed to link program: {0}", i), this.gl.deleteShader(r), r = 0, this.gl.deleteShader(n), n = 0, i && (this.gl.deleteProgram(i), i = 0), 0)) : (f.CubismLogError("Vertex shader compile error!"), 0)
          }, t.prototype.compileShaderSource = function (t, e) {
            var i = e,
              r = this.gl.createShader(t);
            if (this.gl.shaderSource(r, i), this.gl.compileShader(r), !r) {
              var n = this.gl.getShaderInfoLog(r);
              f.CubismLogError("Shader compile log: {0} ", n)
            }
            return this.gl.getShaderParameter(r, this.gl.COMPILE_STATUS) ? r : (this.gl.deleteShader(r), null)
          }, t.prototype.setGl = function (t) {
            this.gl = t
          }, t
        }();
        e.CubismShader_WebGL = C;
        var S, P = function () {};
        e.CubismShaderSet = P,
          function (t) {
            t[t.ShaderNames_SetupMask = 0] = "ShaderNames_SetupMask", t[t.ShaderNames_NormalPremultipliedAlpha = 1] = "ShaderNames_NormalPremultipliedAlpha", t[t.ShaderNames_NormalMaskedPremultipliedAlpha = 2] = "ShaderNames_NormalMaskedPremultipliedAlpha", t[t.ShaderNames_NomralMaskedInvertedPremultipliedAlpha = 3] = "ShaderNames_NomralMaskedInvertedPremultipliedAlpha", t[t.ShaderNames_AddPremultipliedAlpha = 4] = "ShaderNames_AddPremultipliedAlpha", t[t.ShaderNames_AddMaskedPremultipliedAlpha = 5] = "ShaderNames_AddMaskedPremultipliedAlpha", t[t.ShaderNames_AddMaskedPremultipliedAlphaInverted = 6] = "ShaderNames_AddMaskedPremultipliedAlphaInverted", t[t.ShaderNames_MultPremultipliedAlpha = 7] = "ShaderNames_MultPremultipliedAlpha", t[t.ShaderNames_MultMaskedPremultipliedAlpha = 8] = "ShaderNames_MultMaskedPremultipliedAlpha", t[t.ShaderNames_MultMaskedPremultipliedAlphaInverted = 9] = "ShaderNames_MultMaskedPremultipliedAlphaInverted"
          }(S = e.ShaderNames || (e.ShaderNames = {})), e.vertexShaderSrcSetupMask = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_myPos;uniform mat4       u_clipMatrix;void main(){   gl_Position = u_clipMatrix * a_position;   v_myPos = u_clipMatrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}", e.fragmentShaderSrcsetupMask = "precision mediump float;varying vec2       v_texCoord;varying vec4       v_myPos;uniform vec4       u_baseColor;uniform vec4       u_channelFlag;uniform sampler2D  s_texture0;void main(){   float isInside =        step(u_baseColor.x, v_myPos.x/v_myPos.w)       * step(u_baseColor.y, v_myPos.y/v_myPos.w)       * step(v_myPos.x/v_myPos.w, u_baseColor.z)       * step(v_myPos.y/v_myPos.w, u_baseColor.w);   gl_FragColor = u_channelFlag * texture2D(s_texture0, v_texCoord).a * isInside;}", e.vertexShaderSrc = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;uniform mat4       u_matrix;void main(){   gl_Position = u_matrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}", e.vertexShaderSrcMasked = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_clipPos;uniform mat4       u_matrix;uniform mat4       u_clipMatrix;void main(){   gl_Position = u_matrix * a_position;   v_clipPos = u_clipMatrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}", e.fragmentShaderSrcPremultipliedAlpha = "precision mediump float;varying vec2       v_texCoord;uniform vec4       u_baseColor;uniform sampler2D  s_texture0;void main(){   gl_FragColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;}", e.fragmentShaderSrcMaskPremultipliedAlpha = "precision mediump float;varying vec2       v_texCoord;varying vec4       v_clipPos;uniform vec4       u_baseColor;uniform vec4       u_channelFlag;uniform sampler2D  s_texture0;uniform sampler2D  s_texture1;void main(){   vec4 col_formask = texture2D(s_texture0 , v_texCoord) * u_baseColor;   vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;   float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;   col_formask = col_formask * maskVal;   gl_FragColor = col_formask;}", e.fragmentShaderSrcMaskInvertedPremultipliedAlpha = "precision mediump float;varying vec2 v_texCoord;varying vec4 v_clipPos;uniform sampler2D s_texture0;uniform sampler2D s_texture1;uniform vec4 u_channelFlag;uniform vec4 u_baseColor;void main(){vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;col_formask = col_formask * (1.0 - maskVal);gl_FragColor = col_formask;}";
        var M = function (t) {
          function e() {
            var e = t.call(this) || this;
            return e._clippingContextBufferForMask = null, e._clippingContextBufferForDraw = null, e._clippingManager = new y, e.firstDraw = !0, e._textures = new p.csmMap, e._sortedDrawableIndexList = new g.csmVector, e._bufferData = {
              vertex: WebGLBuffer = null,
              uv: WebGLBuffer = null,
              index: WebGLBuffer = null
            }, e._textures.prepareCapacity(32, !0), e
          }
          return n(e, t), e.prototype.initialize = function (e) {
            e.isUsingMasking() && (this._clippingManager = new y, this._clippingManager.initialize(e, e.getDrawableCount(), e.getDrawableMasks(), e.getDrawableMaskCounts())), this._sortedDrawableIndexList.resize(e.getDrawableCount(), 0), t.prototype.initialize.call(this, e)
          }, e.prototype.bindTexture = function (t, e) {
            this._textures.setValue(t, e)
          }, e.prototype.getBindedTextures = function () {
            return this._textures
          }, e.prototype.setClippingMaskBufferSize = function (t) {
            this._clippingManager.release(), this._clippingManager = void 0, this._clippingManager = null, this._clippingManager = new y, this._clippingManager.setClippingMaskBufferSize(t), this._clippingManager.initialize(this.getModel(), this.getModel().getDrawableCount(), this.getModel().getDrawableMasks(), this.getModel().getDrawableMaskCounts())
          }, e.prototype.getClippingMaskBufferSize = function () {
            return this._clippingManager.getClippingMaskBufferSize()
          }, e.prototype.release = function () {
            this._clippingManager.release(), this._clippingManager = void 0, this._clippingManager = null, this.gl.deleteBuffer(this._bufferData.vertex), this._bufferData.vertex = null, this.gl.deleteBuffer(this._bufferData.uv), this._bufferData.uv = null, this.gl.deleteBuffer(this._bufferData.index), this._bufferData.index = null, this._bufferData = null, this._textures = null
          }, e.prototype.doDrawModel = function () {
            null != this._clippingManager && (this.preDraw(), this._clippingManager.setupClippingContext(this.getModel(), this)), this.preDraw();
            for (var t = this.getModel().getDrawableCount(), e = this.getModel().getDrawableRenderOrders(), i = 0; i < t; ++i) {
              var r = e[i];
              this._sortedDrawableIndexList.set(r, i)
            }
            for (i = 0; i < t; ++i) {
              var n = this._sortedDrawableIndexList.at(i);
              this.getModel().getDrawableDynamicFlagIsVisible(n) && (this.setClippingContextBufferForDraw(null != this._clippingManager ? this._clippingManager.getClippingContextListForDraw().at(n) : null), this.setIsCulling(this.getModel().getDrawableCulling(n)), this.drawMesh(this.getModel().getDrawableTextureIndices(n), this.getModel().getDrawableVertexIndexCount(n), this.getModel().getDrawableVertexCount(n), this.getModel().getDrawableVertexIndices(n), this.getModel().getDrawableVertices(n), this.getModel().getDrawableVertexUvs(n), this.getModel().getDrawableOpacity(n), this.getModel().getDrawableBlendMode(n), this.getModel().getDrawableInvertedMaskBit(n)))
            }
          }, e.prototype.drawMesh = function (t, e, i, r, n, o, a, s, u) {
            this.isCulling() ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE), this.gl.frontFace(this.gl.CCW);
            var l, h = this.getModelColor();
            null == this.getClippingContextBufferForMask() && (h.A *= a, this.isPremultipliedAlpha() && (h.R *= h.A, h.G *= h.A, h.B *= h.A)), l = null != this._textures.getValue(t) ? this._textures.getValue(t) : null, C.getInstance().setupShaderProgram(this, l, i, n, r, o, this._bufferData, a, s, h, this.isPremultipliedAlpha(), this.getMvpMatrix(), u), this.gl.drawElements(this.gl.TRIANGLES, e, this.gl.UNSIGNED_SHORT, 0), this.gl.useProgram(null), this.setClippingContextBufferForDraw(null), this.setClippingContextBufferForMask(null)
          }, e.doStaticRelease = function () {
            C.deleteInstance()
          }, e.prototype.setRenderState = function (t, e) {
            h = t, l = e
          }, e.prototype.preDraw = function () {
            this.firstDraw && (this.firstDraw = !1, this._anisortopy = this.gl.getExtension("EXT_texture_filter_anisotropic") || this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic")), this.gl.disable(this.gl.SCISSOR_TEST), this.gl.disable(this.gl.STENCIL_TEST), this.gl.disable(this.gl.DEPTH_TEST), this.gl.frontFace(this.gl.CW), this.gl.enable(this.gl.BLEND), this.gl.colorMask(!0, !0, !0, !0), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null)
          }, e.prototype.setClippingContextBufferForMask = function (t) {
            this._clippingContextBufferForMask = t
          }, e.prototype.getClippingContextBufferForMask = function () {
            return this._clippingContextBufferForMask
          }, e.prototype.setClippingContextBufferForDraw = function (t) {
            this._clippingContextBufferForDraw = t
          }, e.prototype.getClippingContextBufferForDraw = function () {
            return this._clippingContextBufferForDraw
          }, e.prototype.startUp = function (t) {
            this.gl = t, this._clippingManager.setGL(t), C.getInstance().setGl(t)
          }, e
        }(_.CubismRenderer);
        e.CubismRenderer_WebGL = M, _.CubismRenderer.staticRelease = function () {
          M.doStaticRelease()
        };
        var x, B = s(i(827));
        (x = e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismClippingContext = B.CubismClippingContext, x.CubismClippingManager_WebGL = B.CubismClippingManager_WebGL, x.CubismRenderTextureResource = B.CubismRenderTextureResource, x.CubismRenderer_WebGL = B.CubismRenderer_WebGL, x.CubismShaderSet = B.CubismShaderSet, x.CubismShader_WebGL = B.CubismShader_WebGL, x.ShaderNames = B.ShaderNames
      },
      981: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.iterator = e.csmMap = e.csmPair = void 0;
        var a = i(713),
          s = function (t, e) {
            this.first = null == t ? null : t, this.second = null == e ? null : e
          };
        e.csmPair = s;
        var u = function () {
          function t(t) {
            null != t ? t < 1 ? (this._keyValues = [], this._dummyValue = null, this._size = 0) : (this._keyValues = new Array(t), this._size = t) : (this._keyValues = [], this._dummyValue = null, this._size = 0)
          }
          return t.prototype.release = function () {
            this.clear()
          }, t.prototype.appendKey = function (t) {
            this.prepareCapacity(this._size + 1, !1), this._keyValues[this._size] = new s(t), this._size += 1
          }, t.prototype.getValue = function (t) {
            for (var e = -1, i = 0; i < this._size; i++)
              if (this._keyValues[i].first == t) {
                e = i;
                break
              } return e >= 0 ? this._keyValues[e].second : (this.appendKey(t), this._keyValues[this._size - 1].second)
          }, t.prototype.setValue = function (t, e) {
            for (var i = -1, r = 0; r < this._size; r++)
              if (this._keyValues[r].first == t) {
                i = r;
                break
              } i >= 0 ? this._keyValues[i].second = e : (this.appendKey(t), this._keyValues[this._size - 1].second = e)
          }, t.prototype.isExist = function (t) {
            for (var e = 0; e < this._size; e++)
              if (this._keyValues[e].first == t) return !0;
            return !1
          }, t.prototype.clear = function () {
            this._keyValues = void 0, this._keyValues = null, this._keyValues = [], this._size = 0
          }, t.prototype.getSize = function () {
            return this._size
          }, t.prototype.prepareCapacity = function (e, i) {
            e > this._keyValues.length && (0 == this._keyValues.length ? (!i && e < t.DefaultSize && (e = t.DefaultSize), this._keyValues.length = e) : (!i && e < 2 * this._keyValues.length && (e = 2 * this._keyValues.length), this._keyValues.length = e))
          }, t.prototype.begin = function () {
            return new l(this, 0)
          }, t.prototype.end = function () {
            return new l(this, this._size)
          }, t.prototype.erase = function (t) {
            var e = t._index;
            return e < 0 || this._size <= e ? t : (this._keyValues.splice(e, 1), --this._size, new l(this, e))
          }, t.prototype.dumpAsInt = function () {
            for (var t = 0; t < this._size; t++) a.CubismLogDebug("{0} ,", this._keyValues[t]), a.CubismLogDebug("\n")
          }, t.DefaultSize = 10, t
        }();
        e.csmMap = u;
        var l = function () {
          function t(t, e) {
            this._map = null != t ? t : new u, this._index = null != e ? e : 0
          }
          return t.prototype.set = function (t) {
            return this._index = t._index, this._map = t._map, this
          }, t.prototype.preIncrement = function () {
            return ++this._index, this
          }, t.prototype.preDecrement = function () {
            return --this._index, this
          }, t.prototype.increment = function () {
            return new t(this._map, this._index++)
          }, t.prototype.decrement = function () {
            var e = new t(this._map, this._index);
            return this._map = e._map, this._index = e._index, this
          }, t.prototype.ptr = function () {
            return this._map._keyValues[this._index]
          }, t.prototype.notEqual = function (t) {
            return this._index != t._index || this._map != t._map
          }, t
        }();
        e.iterator = l;
        var h, c = o(i(981));
        (h = e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).csmMap = c.csmMap, h.csmPair = c.csmPair, h.iterator = c.iterator
      },
      746: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.csmRect = void 0;
        var a = function () {
          function t(t, e, i, r) {
            this.x = t, this.y = e, this.width = i, this.height = r
          }
          return t.prototype.getCenterX = function () {
            return this.x + .5 * this.width
          }, t.prototype.getCenterY = function () {
            return this.y + .5 * this.height
          }, t.prototype.getRight = function () {
            return this.x + this.width
          }, t.prototype.getBottom = function () {
            return this.y + this.height
          }, t.prototype.setRect = function (t) {
            this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
          }, t.prototype.expand = function (t, e) {
            this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e
          }, t
        }();
        e.csmRect = a;
        var s = o(i(746));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).csmRect = s.csmRect
      },
      590: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.csmString = void 0;
        var a = function () {
          function t(t) {
            this.s = t
          }
          return t.prototype.append = function (t, e) {
            return this.s += void 0 !== e ? t.substr(0, e) : t, this
          }, t.prototype.expansion = function (t, e) {
            for (var i = 0; i < t; i++) this.append(e);
            return this
          }, t.prototype.getBytes = function () {
            return encodeURIComponent(this.s).replace(/%../g, "x").length
          }, t.prototype.getLength = function () {
            return this.s.length
          }, t.prototype.isLess = function (t) {
            return this.s < t.s
          }, t.prototype.isGreat = function (t) {
            return this.s > t.s
          }, t.prototype.isEqual = function (t) {
            return this.s == t
          }, t.prototype.isEmpty = function () {
            return 0 == this.s.length
          }, t
        }();
        e.csmString = a;
        var s = o(i(590));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).csmString = s.csmString
      },
      177: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.iterator = e.csmVector = void 0;
        var a = function () {
          function t(t) {
            void 0 === t && (t = 0), t < 1 ? (this._ptr = [], this._capacity = 0, this._size = 0) : (this._ptr = new Array(t), this._capacity = t, this._size = 0)
          }
          return t.prototype.at = function (t) {
            return this._ptr[t]
          }, t.prototype.set = function (t, e) {
            this._ptr[t] = e
          }, t.prototype.get = function (t) {
            void 0 === t && (t = 0);
            for (var e = new Array, i = t; i < this._size; i++) e.push(this._ptr[i]);
            return e
          }, t.prototype.pushBack = function (e) {
            this._size >= this._capacity && this.prepareCapacity(0 == this._capacity ? t.s_defaultSize : 2 * this._capacity), this._ptr[this._size++] = e
          }, t.prototype.clear = function () {
            this._ptr.length = 0, this._size = 0
          }, t.prototype.getSize = function () {
            return this._size
          }, t.prototype.assign = function (t, e) {
            this._size < t && this.prepareCapacity(t);
            for (var i = 0; i < t; i++) this._ptr[i] = e;
            this._size = t
          }, t.prototype.resize = function (t, e) {
            void 0 === e && (e = null), this.updateSize(t, e, !0)
          }, t.prototype.updateSize = function (t, e, i) {
            if (void 0 === e && (e = null), void 0 === i && (i = !0), this._size < t)
              if (this.prepareCapacity(t), i)
                for (var r = this._size; r < t; r++) this._ptr[r] = "function" == typeof e ? JSON.parse(JSON.stringify(new e)) : e;
              else
                for (r = this._size; r < t; r++) this._ptr[r] = e;
            else {
              var n = this._size - t;
              this._ptr.splice(this._size - n, n)
            }
            this._size = t
          }, t.prototype.insert = function (t, e, i) {
            var r = t._index,
              n = e._index,
              o = i._index,
              a = o - n;
            this.prepareCapacity(this._size + a);
            var s = this._size - r;
            if (s > 0)
              for (var u = 0; u < s; u++) this._ptr.splice(r + u, 0, null);
            for (u = n; u < o; u++, r++) this._ptr[r] = e._vector._ptr[u];
            this._size = this._size + a
          }, t.prototype.remove = function (t) {
            return !(t < 0 || this._size <= t || (this._ptr.splice(t, 1), --this._size, 0))
          }, t.prototype.erase = function (t) {
            var e = t._index;
            return e < 0 || this._size <= e ? t : (this._ptr.splice(e, 1), --this._size, new s(this, e))
          }, t.prototype.prepareCapacity = function (t) {
            t > this._capacity && (0 == this._capacity ? (this._ptr = new Array(t), this._capacity = t) : (this._ptr.length = t, this._capacity = t))
          }, t.prototype.begin = function () {
            return 0 == this._size ? this.end() : new s(this, 0)
          }, t.prototype.end = function () {
            return new s(this, this._size)
          }, t.prototype.getOffset = function (e) {
            var i = new t;
            return i._ptr = this.get(e), i._size = this.get(e).length, i._capacity = this.get(e).length, i
          }, t.s_defaultSize = 10, t
        }();
        e.csmVector = a;
        var s = function () {
          function t(t, e) {
            this._vector = null != t ? t : null, this._index = null != e ? e : 0
          }
          return t.prototype.set = function (t) {
            return this._index = t._index, this._vector = t._vector, this
          }, t.prototype.preIncrement = function () {
            return ++this._index, this
          }, t.prototype.preDecrement = function () {
            return --this._index, this
          }, t.prototype.increment = function () {
            return new t(this._vector, this._index++)
          }, t.prototype.decrement = function () {
            return new t(this._vector, this._index--)
          }, t.prototype.ptr = function () {
            return this._vector._ptr[this._index]
          }, t.prototype.substitution = function (t) {
            return this._index = t._index, this._vector = t._vector, this
          }, t.prototype.notEqual = function (t) {
            return this._index != t._index || this._vector != t._vector
          }, t
        }();
        e.iterator = s;
        var u, l = o(i(177));
        (u = e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).csmVector = l.csmVector, u.iterator = l.iterator
      },
      713: function (t, e, i) {
        var r = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.CubismDebug = e.CubismLogError = e.CubismLogWarning = e.CubismLogInfo = e.CubismLogDebug = e.CubismLogVerbose = e.CSM_ASSERT = e.CubismLogPrintIn = e.CubismLogPrint = void 0;
        var a = i(300),
          s = i(348);
        e.CubismLogPrint = function (t, e, i) {
          u.print(t, "[CSM]" + e, i)
        }, e.CubismLogPrintIn = function (t, i, r) {
          e.CubismLogPrint(t, i + "\n", r)
        }, e.CSM_ASSERT = function (t) {
          console.assert(t)
        }, a.CSM_LOG_LEVEL <= a.CSM_LOG_LEVEL_VERBOSE ? (e.CubismLogVerbose = function (t) {
          for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
          e.CubismLogPrintIn(s.LogLevel.LogLevel_Verbose, "[V]" + t, i)
        }, e.CubismLogDebug = function (t) {
          for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
          e.CubismLogPrintIn(s.LogLevel.LogLevel_Debug, "[D]" + t, i)
        }, e.CubismLogInfo = function (t) {
          for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
          e.CubismLogPrintIn(s.LogLevel.LogLevel_Info, "[I]" + t, i)
        }, e.CubismLogWarning = function (t) {
          for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
          e.CubismLogPrintIn(s.LogLevel.LogLevel_Warning, "[W]" + t, i)
        }, e.CubismLogError = function (t) {
          for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
          e.CubismLogPrintIn(s.LogLevel.LogLevel_Error, "[E]" + t, i)
        }) : a.CSM_LOG_LEVEL == a.CSM_LOG_LEVEL_DEBUG ? (e.CubismLogDebug = function (t) {
          for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
          e.CubismLogPrintIn(s.LogLevel.LogLevel_Debug, "[D]" + t, i)
        }, e.CubismLogInfo = function (t) {
          for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
          e.CubismLogPrintIn(s.LogLevel.LogLevel_Info, "[I]" + t, i)
        }, e.CubismLogWarning = function (t) {
          for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
          e.CubismLogPrintIn(s.LogLevel.LogLevel_Warning, "[W]" + t, i)
        }, e.CubismLogError = function (t) {
          for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
          e.CubismLogPrintIn(s.LogLevel.LogLevel_Error, "[E]" + t, i)
        }) : a.CSM_LOG_LEVEL == a.CSM_LOG_LEVEL_INFO ? (e.CubismLogInfo = function (t) {
          for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
          e.CubismLogPrintIn(s.LogLevel.LogLevel_Info, "[I]" + t, i)
        }, e.CubismLogWarning = function (t) {
          for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
          e.CubismLogPrintIn(s.LogLevel.LogLevel_Warning, "[W]" + t, i)
        }, e.CubismLogError = function (t) {
          for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
          e.CubismLogPrintIn(s.LogLevel.LogLevel_Error, "[E]" + t, i)
        }) : a.CSM_LOG_LEVEL == a.CSM_LOG_LEVEL_WARNING ? (e.CubismLogWarning = function (t) {
          for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
          e.CubismLogPrintIn(s.LogLevel.LogLevel_Warning, "[W]" + t, i)
        }, e.CubismLogError = function (t) {
          for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
          e.CubismLogPrintIn(s.LogLevel.LogLevel_Error, "[E]" + t, i)
        }) : a.CSM_LOG_LEVEL == a.CSM_LOG_LEVEL_ERROR && (e.CubismLogError = function (t) {
          for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
          e.CubismLogPrintIn(s.LogLevel.LogLevel_Error, "[E]" + t, i)
        });
        var u = function () {
          function t() {}
          return t.print = function (t, e, i) {
            if (!(t < s.CubismFramework.getLoggingLevel())) {
              var r = s.CubismFramework.coreLogFunction;
              r && r(e.replace(/\{(\d+)\}/g, (function (t, e) {
                return i[e]
              })))
            }
          }, t.dumpBytes = function (t, e, i) {
            for (var r = 0; r < i; r++) r % 16 == 0 && r > 0 ? this.print(t, "\n") : r % 8 == 0 && r > 0 && this.print(t, "  "), this.print(t, "{0} ", [255 & e[r]]);
            this.print(t, "\n")
          }, t
        }();
        e.CubismDebug = u;
        var l = o(i(713));
        (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismDebug = l.CubismDebug
      },
      127: function (t, e, i) {
        var r, n = this && this.__extends || (r = function (t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function (t, e) {
                t.__proto__ = e
              } || function (t, e) {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
              })(t, e)
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function i() {
              this.constructor = t
            }
            r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
          }),
          o = this && this.__createBinding || (Object.create ? function (t, e, i, r) {
            void 0 === r && (r = i), Object.defineProperty(t, r, {
              enumerable: !0,
              get: function () {
                return e[i]
              }
            })
          } : function (t, e, i, r) {
            void 0 === r && (r = i), t[r] = e[i]
          }),
          a = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function (t, e) {
            t.default = e
          }),
          s = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && o(e, t, i);
            return a(e, t), e
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Live2DCubismFramework = e.JsonMap = e.JsonArray = e.JsonNullvalue = e.JsonError = e.JsonString = e.JsonBoolean = e.JsonFloat = e.CubismJson = e.Value = void 0;
        var u = i(348),
          l = i(981),
          h = i(590),
          c = i(177),
          d = i(713),
          p = "Error: type mismatch",
          m = function () {
            function t() {}
            return t.prototype.getRawString = function (t, e) {
              return this.getString(t, e)
            }, t.prototype.toInt = function (t) {
              return void 0 === t && (t = 0), t
            }, t.prototype.toFloat = function (t) {
              return void 0 === t && (t = 0), t
            }, t.prototype.toBoolean = function (t) {
              return void 0 === t && (t = !1), t
            }, t.prototype.getSize = function () {
              return 0
            }, t.prototype.getArray = function (t) {
              return void 0 === t && (t = null), t
            }, t.prototype.getVector = function (t) {
              return t
            }, t.prototype.getMap = function (t) {
              return t
            }, t.prototype.getValueByIndex = function (e) {
              return t.errorValue.setErrorNotForClientCall(p)
            }, t.prototype.getValueByString = function (e) {
              return t.nullValue.setErrorNotForClientCall(p)
            }, t.prototype.getKeys = function () {
              return t.s_dummyKeys
            }, t.prototype.isError = function () {
              return !1
            }, t.prototype.isNull = function () {
              return !1
            }, t.prototype.isBool = function () {
              return !1
            }, t.prototype.isFloat = function () {
              return !1
            }, t.prototype.isString = function () {
              return !1
            }, t.prototype.isArray = function () {
              return !1
            }, t.prototype.isMap = function () {
              return !1
            }, t.prototype.equals = function (t) {
              return !1
            }, t.prototype.isStatic = function () {
              return !1
            }, t.prototype.setErrorNotForClientCall = function (t) {
              return b.errorValue
            }, t.staticInitializeNotForClientCall = function () {
              _.trueValue = new _(!0), _.falseValue = new _(!1), b.errorValue = new b("ERROR", !0), this.nullValue = new v, t.s_dummyKeys = new c.csmVector
            }, t.staticReleaseNotForClientCall = function () {
              _.trueValue = null, _.falseValue = null, b.errorValue = null, t.nullValue = null, t.s_dummyKeys = null, _.trueValue = null, _.falseValue = null, b.errorValue = null, t.nullValue = null, t.s_dummyKeys = null
            }, t
          }();
        e.Value = m;
        var g = function () {
          function t(t, e) {
            this._error = null, this._lineCount = 0, this._root = null, null != t && this.parseBytes(t, e)
          }
          return t.create = function (e, i) {
            var r = new t;
            return r.parseBytes(e, i) ? r : (t.delete(r), null)
          }, t.delete = function (t) {}, t.prototype.getRoot = function () {
            return this._root
          }, t.prototype.arrayBufferToString = function (t) {
            for (var e = new Uint8Array(t), i = "", r = 0, n = e.length; r < n; ++r) i += "%" + this.pad(e[r].toString(16));
            return decodeURIComponent(i)
          }, t.prototype.pad = function (t) {
            return t.length < 2 ? "0" + t : t
          }, t.prototype.parseBytes = function (t, e) {
            var i, r = new Array(1),
              n = this.arrayBufferToString(t);
            return this._root = this.parseValue(n, e, 0, r), this._error ? (i = "Json parse error : @line " + (this._lineCount + 1) + "\n", this._root = new y(i), d.CubismLogInfo("{0}", this._root.getRawString()), !1) : null != this._root || (this._root = new b(new h.csmString(this._error), !1), !1)
          }, t.prototype.getParseError = function () {
            return this._error
          }, t.prototype.checkEndOfFile = function () {
            return this._root.getArray()[1].equals("EOF")
          }, t.prototype.parseValue = function (t, e, i, r) {
            if (this._error) return null;
            for (var n, o = null, a = i; a < e; a++) switch (t[a]) {
              case "-":
              case ".":
              case "0":
              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7":
              case "8":
              case "9":
                var s = new Array(1);
                return n = u.strtod(t.slice(a), s), r[0] = t.indexOf(s[0]), new f(n);
              case '"':
                return new y(this.parseString(t, e, a + 1, r));
              case "[":
                return this.parseArray(t, e, a + 1, r);
              case "{":
                return this.parseObject(t, e, a + 1, r);
              case "n":
                return a + 3 < e ? (o = new v, r[0] = a + 4) : this._error = "parse null", o;
              case "t":
                return a + 3 < e ? (o = _.trueValue, r[0] = a + 4) : this._error = "parse true", o;
              case "f":
                return a + 4 < e ? (o = _.falseValue, r[0] = a + 5) : this._error = "illegal ',' position", o;
              case ",":
                return this._error = "illegal ',' position", null;
              case "]":
                return r[0] = a, null;
              case "\n":
                this._lineCount++
            }
            return this._error = "illegal end of value", null
          }, t.prototype.parseString = function (t, e, i, r) {
            if (this._error) return null;
            for (var n = i, o = new h.csmString(""), a = i; n < e; n++) switch (t[n]) {
              case '"':
                return r[0] = n + 1, o.append(t.slice(a), n - a), o.s;
              case "//":
                if (++n - 1 > a && o.append(t.slice(a), n - a), a = n + 1, n < e) switch (t[n]) {
                  case "\\":
                    o.expansion(1, "\\");
                    break;
                  case '"':
                    o.expansion(1, '"');
                    break;
                  case "/":
                    o.expansion(1, "/");
                    break;
                  case "b":
                    o.expansion(1, "\b");
                    break;
                  case "f":
                    o.expansion(1, "\f");
                    break;
                  case "n":
                    o.expansion(1, "\n");
                    break;
                  case "r":
                    o.expansion(1, "\r");
                    break;
                  case "t":
                    o.expansion(1, "\t");
                    break;
                  case "u":
                    this._error = "parse string/unicord escape not supported"
                } else this._error = "parse string/escape error"
            }
            return this._error = "parse string/illegal end", null
          }, t.prototype.parseObject = function (t, e, i, r) {
            if (this._error) return null;
            for (var n = new S, o = "", a = i, s = Array(1), u = !1; a < e; a++) {
              t: for (; a < e; a++) switch (t[a]) {
                case '"':
                  if (o = this.parseString(t, e, a + 1, s), this._error) return null;
                  a = s[0], u = !0;
                  break t;
                case "}":
                  return r[0] = a + 1, n;
                case ":":
                  this._error = "illegal ':' position";
                  break;
                case "\n":
                  this._lineCount++
              }
              if (!u) return this._error = "key not found",
              null;u = !1;t: for (; a < e; a++) switch (t[a]) {
                case ":":
                  u = !0, a++;
                  break t;
                case "}":
                  this._error = "illegal '}' position";
                  break;
                case "\n":
                  this._lineCount++
              }
              if (!u) return this._error = "':' not found",
              null;
              var l = this.parseValue(t, e, a, s);
              if (this._error) return null;a = s[0],
              n.put(o, l);t: for (; a < e; a++) switch (t[a]) {
                case ",":
                  break t;
                case "}":
                  return r[0] = a + 1, n;
                case "\n":
                  this._lineCount++
              }
            }
            return this._error = "illegal end of perseObject", null
          }, t.prototype.parseArray = function (t, e, i, r) {
            if (this._error) return null;
            for (var n = new C, o = i, a = new Array(1); o < e; o++) {
              var s = this.parseValue(t, e, o, a);
              if (this._error) return null;
              o = a[0], s && n.add(s);
              t: for (; o < e; o++) switch (t[o]) {
                case ",":
                  break t;
                case "]":
                  return r[0] = o + 1, n;
                case "\n":
                  ++this._lineCount
              }
            }
            return n = void 0, this._error = "illegal end of parseObject", null
          }, t
        }();
        e.CubismJson = g;
        var f = function (t) {
          function e(e) {
            var i = t.call(this) || this;
            return i._value = e, i
          }
          return n(e, t), e.prototype.isFloat = function () {
            return !0
          }, e.prototype.getString = function (t, e) {
            return this._value = parseFloat("\0"), this._stringBuffer = "\0", this._stringBuffer
          }, e.prototype.toInt = function (t) {
            return void 0 === t && (t = 0), parseInt(this._value.toString())
          }, e.prototype.toFloat = function (t) {
            return void 0 === t && (t = 0), this._value
          }, e.prototype.equals = function (t) {
            return "number" == typeof t && !Math.round(t) && t == this._value
          }, e
        }(m);
        e.JsonFloat = f;
        var _ = function (t) {
          function e(e) {
            var i = t.call(this) || this;
            return i._boolValue = e, i
          }
          return n(e, t), e.prototype.isBool = function () {
            return !0
          }, e.prototype.toBoolean = function (t) {
            return void 0 === t && (t = !1), this._boolValue
          }, e.prototype.getString = function (t, e) {
            return this._stringBuffer = this._boolValue ? "true" : "false", this._stringBuffer
          }, e.prototype.equals = function (t) {
            return "boolean" == typeof t && t == this._boolValue
          }, e.prototype.isStatic = function () {
            return !0
          }, e
        }(m);
        e.JsonBoolean = _;
        var y = function (t) {
          function e(e) {
            var i = t.call(this) || this;
            return "string" == typeof e && (i._stringBuffer = e), e instanceof h.csmString && (i._stringBuffer = e.s), i
          }
          return n(e, t), e.prototype.isString = function () {
            return !0
          }, e.prototype.getString = function (t, e) {
            return this._stringBuffer
          }, e.prototype.equals = function (t) {
            return "string" == typeof t ? this._stringBuffer == t : t instanceof h.csmString && this._stringBuffer == t.s
          }, e
        }(m);
        e.JsonString = y;
        var b = function (t) {
          function e(e, i) {
            var r = this;
            return (r = t.call(this, e) || this)._isStatic = i, r
          }
          return n(e, t), e.prototype.isStatic = function () {
            return this._isStatic
          }, e.prototype.setErrorNotForClientCall = function (t) {
            return this._stringBuffer = t, this
          }, e.prototype.isError = function () {
            return !0
          }, e
        }(y);
        e.JsonError = b;
        var v = function (t) {
          function e() {
            var e = t.call(this) || this;
            return e._stringBuffer = "NullValue", e
          }
          return n(e, t), e.prototype.isNull = function () {
            return !0
          }, e.prototype.getString = function (t, e) {
            return this._stringBuffer
          }, e.prototype.isStatic = function () {
            return !0
          }, e
        }(m);
        e.JsonNullvalue = v;
        var C = function (t) {
          function e() {
            var e = t.call(this) || this;
            return e._array = new c.csmVector, e
          }
          return n(e, t), e.prototype.release = function () {
            for (var t = this._array.begin(); t.notEqual(this._array.end()); t.preIncrement()) {
              var e = t.ptr();
              e && !e.isStatic() && (e = void 0, e = null)
            }
          }, e.prototype.isArray = function () {
            return !0
          }, e.prototype.getValueByIndex = function (t) {
            if (t < 0 || this._array.getSize() <= t) return m.errorValue.setErrorNotForClientCall("Error: index out of bounds");
            var e = this._array.at(t);
            return null == e ? m.nullValue : e
          }, e.prototype.getValueByString = function (t) {
            return m.errorValue.setErrorNotForClientCall(p)
          }, e.prototype.getString = function (t, e) {
            for (var i = e + "[\n", r = this._array.begin(); r.notEqual(this._array.end()); r.increment()) {
              var n = r.ptr();
              this._stringBuffer += e + "" + n.getString(e + " ") + "\n"
            }
            return this._stringBuffer = i + e + "]\n", this._stringBuffer
          }, e.prototype.add = function (t) {
            this._array.pushBack(t)
          }, e.prototype.getVector = function (t) {
            return void 0 === t && (t = null), this._array
          }, e.prototype.getSize = function () {
            return this._array.getSize()
          }, e
        }(m);
        e.JsonArray = C;
        var S = function (t) {
          function e() {
            var e = t.call(this) || this;
            return e._map = new l.csmMap, e
          }
          return n(e, t), e.prototype.release = function () {
            for (var t = this._map.begin(); t.notEqual(this._map.end());) {
              var e = t.ptr().second;
              e && !e.isStatic() && (e = void 0, e = null), t.preIncrement()
            }
          }, e.prototype.isMap = function () {
            return !0
          }, e.prototype.getValueByString = function (t) {
            if (t instanceof h.csmString) {
              var e = this._map.getValue(t.s);
              return null == e ? m.nullValue : e
            }
            for (var i = this._map.begin(); i.notEqual(this._map.end()); i.preIncrement())
              if (i.ptr().first == t) return null == i.ptr().second ? m.nullValue : i.ptr().second;
            return m.nullValue
          }, e.prototype.getValueByIndex = function (t) {
            return m.errorValue.setErrorNotForClientCall(p)
          }, e.prototype.getString = function (t, e) {
            this._stringBuffer = e + "{\n";
            for (var i = this._map.begin(); i.notEqual(this._map.end());) {
              var r = i.ptr().first,
                n = i.ptr().second;
              this._stringBuffer += e + " " + r + " : " + n.getString(e + "   ") + " \n", i.preIncrement()
            }
            return this._stringBuffer += e + "}\n", this._stringBuffer
          }, e.prototype.getMap = function (t) {
            return this._map
          }, e.prototype.put = function (t, e) {
            this._map.setValue(t, e)
          }, e.prototype.getKeys = function () {
            if (!this._keys) {
              this._keys = new c.csmVector;
              for (var t = this._map.begin(); t.notEqual(this._map.end());) {
                var e = t.ptr().first;
                this._keys.pushBack(e), t.preIncrement()
              }
            }
            return this._keys
          }, e.prototype.getSize = function () {
            return this._keys.getSize()
          }, e
        }(m);
        e.JsonMap = S;
        var P, M = s(i(127));
        (P = e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).CubismJson = M.CubismJson, P.JsonArray = M.JsonArray, P.JsonBoolean = M.JsonBoolean, P.JsonError = M.JsonError, P.JsonFloat = M.JsonFloat, P.JsonMap = M.JsonMap, P.JsonNullvalue = M.JsonNullvalue, P.JsonString = M.JsonString, P.Value = M.Value
      },
      913: (t, e) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var i = document.currentScript;
        if (!(i instanceof HTMLScriptElement)) throw new Error("currentScript is invalid: " + i);
        var r = i.dataset.canvasid,
          n = i.dataset.coordinateid,
          o = i.dataset.zippath;
        e.default = {
          canvasId: r,
          coordinateId: n,
          modelZipPath: o,
          model3jsonPath: "preview/hotaru_keyvisual.model3.json",
          idlingMotionGroupName: "mtn/W01.motion3.json",
          modelSizeBase: "height",
          debug: !1
        }
      },
      686: function (t, e, i) {
        var r, n = this && this.__extends || (r = function (t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
              }
              instanceof Array && function (t, e) {
                t.__proto__ = e
              } || function (t, e) {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
              })(t, e)
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function i() {
              this.constructor = t
            }
            r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
          }),
          o = this && this.__awaiter || function (t, e, i, r) {
            return new(i || (i = Promise))((function (n, o) {
              function a(t) {
                try {
                  u(r.next(t))
                } catch (t) {
                  o(t)
                }
              }

              function s(t) {
                try {
                  u(r.throw(t))
                } catch (t) {
                  o(t)
                }
              }

              function u(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function (t) {
                  t(e)
                }))).then(a, s)
              }
              u((r = r.apply(t, e || [])).next())
            }))
          },
          a = this && this.__generator || function (t, e) {
            var i, r, n, o, a = {
              label: 0,
              sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1]
              },
              trys: [],
              ops: []
            };
            return o = {
              next: s(0),
              throw: s(1),
              return: s(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
              return this
            }), o;

            function s(o) {
              return function (s) {
                return function (o) {
                  if (i) throw new TypeError("Generator is already executing.");
                  for (; a;) try {
                    if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, o[1])).done) return n;
                    switch (r = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                      case 0:
                      case 1:
                        n = o;
                        break;
                      case 4:
                        return a.label++, {
                          value: o[1],
                          done: !1
                        };
                      case 5:
                        a.label++, r = o[1], o = [0];
                        continue;
                      case 7:
                        o = a.ops.pop(), a.trys.pop();
                        continue;
                      default:
                        if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                          a = 0;
                          continue
                        }
                        if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                          a.label = o[1];
                          break
                        }
                        if (6 === o[0] && a.label < n[1]) {
                          a.label = n[1], n = o;
                          break
                        }
                        if (n && a.label < n[2]) {
                          a.label = n[2], a.ops.push(o);
                          break
                        }
                        n[2] && a.ops.pop(), a.trys.pop();
                        continue
                    }
                    o = e.call(t, a)
                  } catch (t) {
                    o = [6, t], r = 0
                  } finally {
                    i = n = 0
                  }
                  if (5 & o[0]) throw o[1];
                  return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                  }
                }([o, s])
              }
            }
          },
          s = this && this.__read || function (t, e) {
            var i = "function" == typeof Symbol && t[Symbol.iterator];
            if (!i) return t;
            var r, n, o = i.call(t),
              a = [];
            try {
              for (;
                (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
            } catch (t) {
              n = {
                error: t
              }
            } finally {
              try {
                r && !r.done && (i = o.return) && i.call(o)
              } finally {
                if (n) throw n.error
              }
            }
            return a
          },
          u = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            }
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var l = i(266),
          h = i(483),
          c = i(348),
          d = i(188),
          p = i(177),
          m = u(i(913)),
          g = i(573),
          f = function (t) {
            function e(e) {
              var i = t.call(this) || this;
              return i.setting = e, i.idParamAngleX = c.CubismFramework.getIdManager().getId(l.CubismDefaultParameterId.ParamAngleX), i.idParamAngleY = c.CubismFramework.getIdManager().getId(l.CubismDefaultParameterId.ParamAngleY), i.idParamEyeBallX = c.CubismFramework.getIdManager().getId(l.CubismDefaultParameterId.ParamEyeBallX), i.idParamEyeBallY = c.CubismFramework.getIdManager().getId(l.CubismDefaultParameterId.ParamEyeBallY), i.idParamBodyAngleX = c.CubismFramework.getIdManager().getId(l.CubismDefaultParameterId.ParamBodyAngleX), i.motionNames = [], i.motions = {}, i.idling = !1, i.eyeBlinkParamIds = new p.csmVector, i.lipSyncParamIds = new p.csmVector, i
            }
            return n(e, t), e.prototype.update = function () {
              var t, e;
              if (this._dragManager.update(g.timer.deltaTime), this._dragX = this._dragManager.getX(), this._dragY = this._dragManager.getY(), this.getModel().loadParameters(), this._motionManager.updateMotion(this.getModel(), g.timer.deltaTime), this.getModel().saveParameters(), this._model.addParameterValueById(this.idParamAngleX, 30 * this._dragX), this._model.addParameterValueById(this.idParamAngleY, 30 * this._dragY), this._model.addParameterValueById(this.idParamBodyAngleX, 10 * this._dragX), this._model.addParameterValueById(this.idParamEyeBallX, this._dragX), this._model.addParameterValueById(this.idParamEyeBallY, this._dragY), this._motionManager.isFinished()) {
                for (var i = m.default.idlingMotionGroupName; this.idling && i === m.default.idlingMotionGroupName;) i = this.motionNames[Math.floor(Math.random() * this.motionNames.length)];
                this.startMotion(i), this.idling = !this.idling
              }
              null === (t = this._pose) || void 0 === t || t.updateParameters(this._model, 0), null === (e = this._physics) || void 0 === e || e.evaluate(this._model, g.timer.deltaTime), this._model.update()
            }, e.prototype.startMotion = function (t) {
              this._motionManager.startMotionPriority(this.motions[t], !1, 0)
            }, e.prototype.setDragging = function (t, e) {
              this._dragManager.set(t, e)
            }, e.prototype.setupMoc3 = function () {
              return o(this, void 0, void 0, (function () {
                var t;
                return a(this, (function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.setting.fetchArrayBuffer(this.setting.model3json.getModelFileName())];
                    case 1:
                      return t = e.sent(), g.assert(t, "couldn't fetch moc3"), this.loadModel(t), [2]
                  }
                }))
              }))
            }, e.prototype.setupPose3Json = function () {
              return o(this, void 0, void 0, (function () {
                var t;
                return a(this, (function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.setting.fetchArrayBuffer(this.setting.model3json.getPoseFileName())];
                    case 1:
                      return (t = e.sent()).byteLength > 0 && this.loadPose(t, t.byteLength), [2]
                  }
                }))
              }))
            }, e.prototype.setupPhysics3Json = function () {
              return o(this, void 0, void 0, (function () {
                var t;
                return a(this, (function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.setting.fetchArrayBuffer(this.setting.model3json.getPhysicsFileName())];
                    case 1:
                      return (t = e.sent()).byteLength > 0 && this.loadPhysics(t, t.byteLength), [2]
                  }
                }))
              }))
            }, e.prototype.setupMotions = function () {
              return o(this, void 0, void 0, (function () {
                var t, e, i = this;
                return a(this, (function (r) {
                  switch (r.label) {
                    case 0:
                      return e = (t = Object).entries, [4, this.setting.getAllMotions()];
                    case 1:
                      return e.apply(t, [r.sent()]).forEach((function (t) {
                        var e = s(t, 2);
                        e[0], e[1].forEach((function (t) {
                          return o(i, void 0, void 0, (function () {
                            var e, i;
                            return a(this, (function (r) {
                              switch (r.label) {
                                case 0:
                                  return this.motionNames.push(t), [4, this.setting.fetchArrayBuffer(t)];
                                case 1:
                                  return e = r.sent(), (i = this.loadMotion(e, e.byteLength, t)).setEffectIds(this.eyeBlinkParamIds, this.lipSyncParamIds), this.motions[t] = i, [2]
                              }
                            }))
                          }))
                        }))
                      })), g.range(this.setting.model3json.getEyeBlinkParameterCount()).map((function (t) {
                        return i.setting.model3json.getEyeBlinkParameterId(t)
                      })).forEach((function (t) {
                        return i.eyeBlinkParamIds.pushBack(t)
                      })), g.range(this.setting.model3json.getLipSyncParameterCount()).map((function (t) {
                        return i.setting.model3json.getLipSyncParameterId(t)
                      })).forEach((function (t) {
                        return i.lipSyncParamIds.pushBack(t)
                      })), this._eyeBlink = h.CubismEyeBlink.create(this.setting.model3json), [2]
                  }
                }))
              }))
            }, e
          }(d.CubismUserModel);
        e.default = f
      },
      607: function (t, e, i) {
        var r = this && this.__awaiter || function (t, e, i, r) {
            return new(i || (i = Promise))((function (n, o) {
              function a(t) {
                try {
                  u(r.next(t))
                } catch (t) {
                  o(t)
                }
              }

              function s(t) {
                try {
                  u(r.throw(t))
                } catch (t) {
                  o(t)
                }
              }

              function u(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function (t) {
                  t(e)
                }))).then(a, s)
              }
              u((r = r.apply(t, e || [])).next())
            }))
          },
          n = this && this.__generator || function (t, e) {
            var i, r, n, o, a = {
              label: 0,
              sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1]
              },
              trys: [],
              ops: []
            };
            return o = {
              next: s(0),
              throw: s(1),
              return: s(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
              return this
            }), o;

            function s(o) {
              return function (s) {
                return function (o) {
                  if (i) throw new TypeError("Generator is already executing.");
                  for (; a;) try {
                    if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, o[1])).done) return n;
                    switch (r = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                      case 0:
                      case 1:
                        n = o;
                        break;
                      case 4:
                        return a.label++, {
                          value: o[1],
                          done: !1
                        };
                      case 5:
                        a.label++, r = o[1], o = [0];
                        continue;
                      case 7:
                        o = a.ops.pop(), a.trys.pop();
                        continue;
                      default:
                        if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                          a = 0;
                          continue
                        }
                        if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                          a.label = o[1];
                          break
                        }
                        if (6 === o[0] && a.label < n[1]) {
                          a.label = n[1], n = o;
                          break
                        }
                        if (n && a.label < n[2]) {
                          a.label = n[2], a.ops.push(o);
                          break
                        }
                        n[2] && a.ops.pop(), a.trys.pop();
                        continue
                    }
                    o = e.call(t, a)
                  } catch (t) {
                    o = [6, t], r = 0
                  } finally {
                    i = n = 0
                  }
                  if (5 & o[0]) throw o[1];
                  return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                  }
                }([o, s])
              }
            }
          },
          o = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            }
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var a = i(946),
          s = i(348),
          u = i(573),
          l = o(i(913)),
          h = o(i(338)),
          c = o(i(686)),
          d = o(i(153)),
          p = document.getElementById(l.default.canvasId),
          m = document.getElementById(l.default.coordinateId),
          g = p.getContext("webgl"),
          f = new d.default(p, m);
        r(void 0, void 0, void 0, (function () {
          var t, e, i, o, d, _, y;
          return n(this, (function (b) {
            switch (b.label) {
              case 0:
                return u.assert(l.default.modelZipPath, "config.modelZipPath cannot be empty"), u.assert(p, "canvas is missing"), u.assert(g, "WebGL must be enabled"), l.default.debug && (p.style.border = "2px solid red", m.style.border = "2px dotted blue"), s.CubismFramework.startUp(), s.CubismFramework.initialize(), p.height !== p.clientHeight && (p.height = p.clientHeight * window.devicePixelRatio), p.width !== p.clientWidth && (p.width = p.clientWidth * window.devicePixelRatio), g.viewport(0, 0, p.width, p.height), g.enable(g.BLEND), g.blendFunc(g.SRC_ALPHA, g.ONE_MINUS_SRC_ALPHA), g.clearColor(0, 0, 0, 0), g.enable(g.DEPTH_TEST), g.depthFunc(g.LEQUAL), [4, (t = new h.default(l.default.modelZipPath, l.default.model3jsonPath)).init()];
              case 1:
                return b.sent(), [4, (e = new c.default(t)).setupMoc3()];
              case 2:
                return b.sent(), [4, e.setupPose3Json()];
              case 3:
                return b.sent(), [4, e.setupPhysics3Json()];
              case 4:
                return b.sent(), [4, e.setupMotions()];
              case 5:
                return b.sent(), f.model = e, e.createRenderer(), i = e.getRenderer(), [4, t.getAllTextures()];
              case 6:
                return o = b.sent(), [4, Promise.all(o.map((function (e) {
                  return new Promise((function (i) {
                    return r(void 0, void 0, void 0, (function () {
                      var r, o, a, s;
                      return n(this, (function (n) {
                        switch (n.label) {
                          case 0:
                            return o = Blob.bind, [4, t.fetchArrayBuffer(e)];
                          case 1:
                            return r = new(o.apply(Blob, [void 0, [n.sent()]])), a = window.URL.createObjectURL(r), (s = new Image).addEventListener("load", (function () {
                              var t = g.createTexture();
                              g.bindTexture(g.TEXTURE_2D, t), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR_MIPMAP_LINEAR), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.LINEAR), g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, g.RGBA, g.UNSIGNED_BYTE, s), g.generateMipmap(g.TEXTURE_2D), g.bindTexture(g.TEXTURE_2D, null), i(t)
                            })), s.src = a, [2]
                        }
                      }))
                    }))
                  }))
                })))];
              case 7:
                return b.sent().forEach((function (t, e) {
                  return i.bindTexture(e, t)
                })), i.setIsPremultipliedAlpha(!0), i.startUp(g), d = new a.CubismMatrix44, _ = 1 / {
                  height: p.width,
                  width: p.height
                } [l.default.modelSizeBase], d.scale(_ * p.height, _ * p.width), d.multiplyByMatrix(e.getModelMatrix()), i.setMvpMatrix(d), (y = function () {
                  e.update(), i.setRenderState(g.getParameter(g.FRAMEBUFFER_BINDING), [0, 0, p.width, p.height]), i.drawModel(), u.timer.updateTime(), requestAnimationFrame(y)
                })(), [2]
            }
          }))
        }))
      },
      338: function (t, e, i) {
        var r = this && this.__awaiter || function (t, e, i, r) {
            return new(i || (i = Promise))((function (n, o) {
              function a(t) {
                try {
                  u(r.next(t))
                } catch (t) {
                  o(t)
                }
              }

              function s(t) {
                try {
                  u(r.throw(t))
                } catch (t) {
                  o(t)
                }
              }

              function u(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function (t) {
                  t(e)
                }))).then(a, s)
              }
              u((r = r.apply(t, e || [])).next())
            }))
          },
          n = this && this.__generator || function (t, e) {
            var i, r, n, o, a = {
              label: 0,
              sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1]
              },
              trys: [],
              ops: []
            };
            return o = {
              next: s(0),
              throw: s(1),
              return: s(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
              return this
            }), o;

            function s(o) {
              return function (s) {
                return function (o) {
                  if (i) throw new TypeError("Generator is already executing.");
                  for (; a;) try {
                    if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, o[1])).done) return n;
                    switch (r = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                      case 0:
                      case 1:
                        n = o;
                        break;
                      case 4:
                        return a.label++, {
                          value: o[1],
                          done: !1
                        };
                      case 5:
                        a.label++, r = o[1], o = [0];
                        continue;
                      case 7:
                        o = a.ops.pop(), a.trys.pop();
                        continue;
                      default:
                        if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                          a = 0;
                          continue
                        }
                        if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                          a.label = o[1];
                          break
                        }
                        if (6 === o[0] && a.label < n[1]) {
                          a.label = n[1], n = o;
                          break
                        }
                        if (n && a.label < n[2]) {
                          a.label = n[2], a.ops.push(o);
                          break
                        }
                        n[2] && a.ops.pop(), a.trys.pop();
                        continue
                    }
                    o = e.call(t, a)
                  } catch (t) {
                    o = [6, t], r = 0
                  } finally {
                    i = n = 0
                  }
                  if (5 & o[0]) throw o[1];
                  return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                  }
                }([o, s])
              }
            }
          },
          o = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            }
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var a = i(741),
          s = i(573),
          u = o(i(183)),
          l = function () {
            function t(t, e) {
              this.modelZipPath = t, this.modelDirectoryPath = e.substr(0, e.lastIndexOf("/")), this.model3jsonPath = e
            }
            return Object.defineProperty(t.prototype, "model3json", {
              get: function () {
                return s.assert(this._model3json, "not initialized yet"), this._model3json
              },
              enumerable: !1,
              configurable: !0
            }), t.prototype.init = function () {
              return r(this, void 0, void 0, (function () {
                var t, e, i;
                return n(this, (function (r) {
                  switch (r.label) {
                    case 0:
                      return s.assert(!this._model3json, "already initialized"), t = this, e = u.default.bind, [4, s.fetchArrayBuffer(this.modelZipPath)];
                    case 1:
                      return t.zipLoader = new(e.apply(u.default, [void 0, r.sent()])), [4, this.zipLoader.loadAsArrayBufferAsync(this.model3jsonPath)];
                    case 2:
                      return i = r.sent(), this._model3json = new a.CubismModelSettingJson(i, i.byteLength), [2]
                  }
                }))
              }))
            }, t.prototype.getPath = function () {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
              return this.modelDirectoryPath + "/" + t.join("/")
            }, t.prototype.fetchArrayBuffer = function (t) {
              return r(this, void 0, void 0, (function () {
                return n(this, (function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.zipLoader.loadAsArrayBufferAsync(this.getPath(t))];
                    case 1:
                      return [2, e.sent()]
                  }
                }))
              }))
            }, t.prototype.getAllTextures = function () {
              return r(this, void 0, void 0, (function () {
                var t = this;
                return n(this, (function (e) {
                  return [2, s.range(this.model3json.getTextureCount()).map((function (e) {
                    return t.model3json.getTextureFileName(e)
                  }))]
                }))
              }))
            }, t.prototype.getAllMotions = function () {
              return r(this, void 0, void 0, (function () {
                var t = this;
                return n(this, (function (e) {
                  return [2, s.range(this.model3json.getMotionGroupCount()).reduce((function (e, i) {
                    var r = t.model3json.getMotionGroupName(i);
                    return e[r] = s.range(t.model3json.getMotionCount(r)).map((function (e) {
                      return t.model3json.getMotionFileName(r, e)
                    })), e
                  }), {})]
                }))
              }))
            }, t
          }();
        e.default = l
      },
      153: (t, e, i) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var r = i(946),
          n = i(573),
          o = function () {
            function t(t, e) {
              var i = this;
              this.canvas = t, this.coordinate = e;
              var n = this.canvas.clientWidth,
                o = this.canvas.clientHeight,
                a = n / o,
                s = -a,
                u = a;
              if (this.deviceToScreen = new r.CubismMatrix44, n > o) {
                var l = Math.abs(u - s);
                this.deviceToScreen.scaleRelative(l / n, -l / n)
              } else {
                var h = Math.abs(-2);
                this.deviceToScreen.scaleRelative(h / o, -h / o)
              }
              this.deviceToScreen.translateRelative(.5 * -n, .5 * -o), console.log(this.deviceToScreen), this.coordinate.addEventListener("mousemove", (function (t) {
                return i.onMouseMove(t)
              })), this.coordinate.addEventListener("mouseleave", (function (t) {
                return i.onMouseLeave(t)
              }))
            }
            return t.prototype.onMouseMove = function (t) {
              var e, i = this.canvas.getBoundingClientRect(),
                r = this.coordinate.getBoundingClientRect(),
                o = t.clientX - (i.left - r.left),
                a = t.clientY - (i.top - r.top);
              null === (e = this.model) || void 0 === e || e.setDragging(n.constrain(this.deviceToScreen.transformX(o), -1, 1), n.constrain(this.deviceToScreen.transformY(a), -1, 1))
            }, t.prototype.onMouseLeave = function (t) {
              var e;
              null === (e = this.model) || void 0 === e || e.setDragging(0, 0)
            }, t
          }();
        e.default = o
      },
      573: function (t, e) {
        var i = this && this.__awaiter || function (t, e, i, r) {
            return new(i || (i = Promise))((function (n, o) {
              function a(t) {
                try {
                  u(r.next(t))
                } catch (t) {
                  o(t)
                }
              }

              function s(t) {
                try {
                  u(r.throw(t))
                } catch (t) {
                  o(t)
                }
              }

              function u(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function (t) {
                  t(e)
                }))).then(a, s)
              }
              u((r = r.apply(t, e || [])).next())
            }))
          },
          r = this && this.__generator || function (t, e) {
            var i, r, n, o, a = {
              label: 0,
              sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1]
              },
              trys: [],
              ops: []
            };
            return o = {
              next: s(0),
              throw: s(1),
              return: s(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
              return this
            }), o;

            function s(o) {
              return function (s) {
                return function (o) {
                  if (i) throw new TypeError("Generator is already executing.");
                  for (; a;) try {
                    if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, o[1])).done) return n;
                    switch (r = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                      case 0:
                      case 1:
                        n = o;
                        break;
                      case 4:
                        return a.label++, {
                          value: o[1],
                          done: !1
                        };
                      case 5:
                        a.label++, r = o[1], o = [0];
                        continue;
                      case 7:
                        o = a.ops.pop(), a.trys.pop();
                        continue;
                      default:
                        if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                          a = 0;
                          continue
                        }
                        if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                          a.label = o[1];
                          break
                        }
                        if (6 === o[0] && a.label < n[1]) {
                          a.label = n[1], n = o;
                          break
                        }
                        if (n && a.label < n[2]) {
                          a.label = n[2], a.ops.push(o);
                          break
                        }
                        n[2] && a.ops.pop(), a.trys.pop();
                        continue
                    }
                    o = e.call(t, a)
                  } catch (t) {
                    o = [6, t], r = 0
                  } finally {
                    i = n = 0
                  }
                  if (5 & o[0]) throw o[1];
                  return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                  }
                }([o, s])
              }
            }
          },
          n = this && this.__read || function (t, e) {
            var i = "function" == typeof Symbol && t[Symbol.iterator];
            if (!i) return t;
            var r, n, o = i.call(t),
              a = [];
            try {
              for (;
                (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
            } catch (t) {
              n = {
                error: t
              }
            } finally {
              try {
                r && !r.done && (i = o.return) && i.call(o)
              } finally {
                if (n) throw n.error
              }
            }
            return a
          },
          o = this && this.__spreadArray || function (t, e) {
            for (var i = 0, r = e.length, n = t.length; i < r; i++, n++) t[n] = e[i];
            return t
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.constrain = e.timer = e.range = e.fetchArrayBuffer = e.assert = void 0, e.assert = function (t, e) {
          if (!t) throw new Error(e)
        }, e.fetchArrayBuffer = function (t) {
          return i(void 0, void 0, void 0, (function () {
            return r(this, (function (e) {
              return [2, fetch(t).then((function (t) {
                return 200 === t.status ? t.arrayBuffer() : void 0
              }))]
            }))
          }))
        }, e.range = function (t) {
          return o([], n(Array(t).keys()))
        }, e.timer = new(function () {
          function t() {
            this._lastFrame = 0, this._deltaTime = 0
          }
          return Object.defineProperty(t.prototype, "deltaTime", {
            get: function () {
              return this._deltaTime
            },
            enumerable: !1,
            configurable: !0
          }), t.prototype.updateTime = function () {
            var t = Date.now();
            this._deltaTime = (t - this._lastFrame) / 1e3, this._lastFrame = t
          }, t
        }()), e.constrain = function (t, e, i) {
          return t < e ? e : i < t ? i : t
        }
      },
      183: function (t, e) {
        var i = this && this.__awaiter || function (t, e, i, r) {
            return new(i || (i = Promise))((function (n, o) {
              function a(t) {
                try {
                  u(r.next(t))
                } catch (t) {
                  o(t)
                }
              }

              function s(t) {
                try {
                  u(r.throw(t))
                } catch (t) {
                  o(t)
                }
              }

              function u(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function (t) {
                  t(e)
                }))).then(a, s)
              }
              u((r = r.apply(t, e || [])).next())
            }))
          },
          r = this && this.__generator || function (t, e) {
            var i, r, n, o, a = {
              label: 0,
              sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1]
              },
              trys: [],
              ops: []
            };
            return o = {
              next: s(0),
              throw: s(1),
              return: s(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
              return this
            }), o;

            function s(o) {
              return function (s) {
                return function (o) {
                  if (i) throw new TypeError("Generator is already executing.");
                  for (; a;) try {
                    if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, o[1])).done) return n;
                    switch (r = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                      case 0:
                      case 1:
                        n = o;
                        break;
                      case 4:
                        return a.label++, {
                          value: o[1],
                          done: !1
                        };
                      case 5:
                        a.label++, r = o[1], o = [0];
                        continue;
                      case 7:
                        o = a.ops.pop(), a.trys.pop();
                        continue;
                      default:
                        if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                          a = 0;
                          continue
                        }
                        if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                          a.label = o[1];
                          break
                        }
                        if (6 === o[0] && a.label < n[1]) {
                          a.label = n[1], n = o;
                          break
                        }
                        if (n && a.label < n[2]) {
                          a.label = n[2], a.ops.push(o);
                          break
                        }
                        n[2] && a.ops.pop(), a.trys.pop();
                        continue
                    }
                    o = e.call(t, a)
                  } catch (t) {
                    o = [6, t], r = 0
                  } finally {
                    i = n = 0
                  }
                  if (5 & o[0]) throw o[1];
                  return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                  }
                }([o, s])
              }
            }
          },
          n = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
              i = e && t[e],
              r = 0;
            if (i) return i.call(t);
            if (t && "number" == typeof t.length) return {
              next: function () {
                return t && r >= t.length && (t = void 0), {
                  value: t && t[r++],
                  done: !t
                }
              }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var o = function () {
          function t(t) {
            var e, i;
            this.unzip = new Zlib.Unzip(new Uint8Array(t)), this._filenames = this.unzip.getFilenames();
            var r = [];
            try {
              for (var o = n(this._filenames), a = o.next(); !a.done; a = o.next()) {
                var s = a.value;
                Promise.resolve(s).then((function (t) {
                  return decodeURIComponent(escape(t))
                })).then((function (t) {
                  r.push(t)
                })).catch((function (t) {
                  console.error("文字化けのdecodeができませんでした: ", t)
                }))
              }
            } catch (t) {
              e = {
                error: t
              }
            } finally {
              try {
                a && !a.done && (i = o.return) && i.call(o)
              } finally {
                if (e) throw e.error
              }
            }
            this._decodeFilenames = r
          }
          return Object.defineProperty(t.prototype, "filenames", {
            get: function () {
              return this._filenames
            },
            enumerable: !1,
            configurable: !0
          }), t.prototype.loadAsArrayBufferAsync = function (t) {
            return i(this, void 0, void 0, (function () {
              var e, i;
              return r(this, (function (r) {
                return (e = t.match(/^\.+\/(.*)/)) && e.length > 1 && (t = e[1]), -1 === (i = this._filenames.findIndex((function (e) {
                  return e === t
                }))) && (i = this._decodeFilenames.findIndex((function (e) {
                  return e === t
                }))), -1 === i ? [2, new ArrayBuffer(0)] : [2, this.unzip.decompress(this._filenames[i]).buffer]
              }))
            }))
          }, t.prototype.loadAsJsonAsync = function (t) {
            return i(this, void 0, void 0, (function () {
              var e, i, n, o, a, s;
              return r(this, (function (r) {
                switch (r.label) {
                  case 0:
                    return i = Uint8Array.bind, [4, this.loadAsArrayBufferAsync(t)];
                  case 1:
                    for (e = new(i.apply(Uint8Array, [void 0, r.sent()])), n = [], e.forEach((function (t) {
                        return n.push(t)
                      })), o = "", a = 0; a < e.length; a += 1024) o += String.fromCharCode.apply(null, n.slice(a, a + 1024));
                    return s = decodeURIComponent(escape(o).replace(/%00/g, "")), [2, JSON.parse(s)]
                }
              }))
            }))
          }, t
        }();
        e.default = o
      }
    },
    e = {};
  ! function i(r) {
    var n = e[r];
    if (void 0 !== n) return n.exports;
    var o = e[r] = {
      exports: {}
    };
    return t[r].call(o.exports, o, o.exports, i), o.exports
  }(607)
})();
