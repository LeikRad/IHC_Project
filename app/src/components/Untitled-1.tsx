<div>
                                <h2 className="font-bold">Known Languages</h2>
                                {Object.keys(teacher.known_langs).map((lang) => (
                                    <div>
                                        <span className="indent-4">{lang} [{teacher.known_langs[lang]}]</span><br/>
                                        <span><progress className={proficiencybar(teacher, lang)[1]} value={proficiencybar(teacher, lang)[0]} max="100"></progress></span>
                                    </div>
                                ))}
                            </div>